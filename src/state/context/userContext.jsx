import { createContext, useEffect, useMemo, useState } from 'react';
import {
  getUser,
  getLocalProfile,
  saveLocalProfile,
  removeLocalProfile,
  getProfile,
  onAuthChange,
} from '../services/user-service.js';

export const UserStateContext = createContext();
export const UserActionContext = createContext();
//two pieces of context to store who the user is
//and what they're doing

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [profile, setProfile] = useState(getLocalProfile());

  const loadProfile = async () => {
    const { data, error } = await getProfile();
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    if (data) {
      setProfile(data);
      saveLocalProfile(data);
      //save to state and local storage
    }
  };

  useEffect(() => {
    if (user) loadProfile();

    const { data } = onAuthChange((event) => {
      if (event == 'SIGNED_IN') loadProfile();
      if (event == 'SIGNED_OUT') {
        //get rid of state and storage on sign out
        setUser(null);
        setProfile(null);
        removeLocalProfile();
      }
    });

    return () => data.unsubscribe();
  }, []);

  const stateValue = {
    user,
    profile,
  };

  const actionValue = useMemo(
    //shortening for later profile manipulation
    () => ({
      setUser,
      setProfile,
    }),
    [setUser, setProfile]
  );

  return (
    //return components that actually use this context
    <UserStateContext.Provider value={stateValue}>
      <UserActionContext.Provider value={actionValue}>
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
}
