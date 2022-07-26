import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ProtectedRoutes from './UserAuth/ProtectRoutes.jsx';
import { Toaster } from 'react-hot-toast';
import Other from './Other/Other.jsx';
import Home from './Home/Home.jsx';
import Header from './Header/Header.jsx';
import Forms from './Forms/Forms.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import MonsterList from './Monsters/MonsterList.jsx';
import MonsterProvider from '../state/context/monsterContext.jsx';
import UserProvider from '../state/context/userContext.jsx';
import UserAuth from './UserAuth/UserAuth.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Toaster />
        <Header />
        <MonsterProvider>
          <Routes>
            <Route path="user/*" element={<UserAuth />} />
            <Route element={<ProtectedRoutes />}>
              <Route index element={<Home />} />
              <Route path="other" element={<Other />} />
              <Route path="pokedex" element={<Pokedex />} />
              <Route path="monsters" element={<MonsterList />} />
              <Route path="forms" element={<Forms />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </MonsterProvider>
      </Router>
    </UserProvider>

  );
}
