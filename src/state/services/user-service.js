import client from './client.js';

function moveIfStoredLocation() {
  //move you to where you tried to go before you logged in
  const location = localStorage.getItem('location');
  if (location) {
    localStorage.removeItem('location');
    window.location.replace(location);
  }
}

export function getUser() {
  return client.auth.user();
}

export async function signUp(credentials) {
  const signedUp = await client.auth.signUp(credentials);
  moveIfStoredLocation();
  return signedUp;
}

export async function signIn(credentials) {
  const signedIn = await client.auth.signIn(credentials);
  moveIfStoredLocation();
  return signedIn;
}

export async function signOut() {
  return await client.auth.signOut();
}
//sign up, in, out as we've done before

export function onAuthChange(handleAuthChange) {
  return client.auth.onAuthStateChange(handleAuthChange);
}
//listens for any change to auth (sign in/out) and run appropriate function

const PROFILE = 'profile';

export function getLocalProfile() {
  //from local storage
  const json = localStorage.getItem(PROFILE);
  if (!json) return null;
  try {
    return JSON.parse(json);
  } catch (err) {
    localStorage.removeItem(PROFILE);
  }
}

export function saveLocalProfile(profile) {
  //to local storage
  localStorage.setItem(PROFILE, JSON.stringify(profile));
}

export function removeLocalProfile() {
  localStorage.removeItem(PROFILE);
}

export async function getProfile() {
  //from supabase
  const user = getUser();
  const response = await client
    .from('profiles')
    .select()
    .eq('id', user.id);
  return response;
}

export async function upsertProfile(profile) {
  //to supabase
  //'upsert' being 'update if it's there, insert if it's not
  const response = await client
    .from('profiles')
    .upsert(profile)
    .eq('id', profile.id)
    .single();
  return response;
}

//none of the avatar stuff matters or is used but i'm keeping it
const BUCKET_NAME = 'avatars';

export async function uploadAvatar(userId, imageFile) {
  //stored in public/[userid] folder
  const imageName = `${userId}/${imageFile.name}`;

  // saved to supabase storage bucket
  // then use it to get the public URL
  const bucket = client.storage.from(BUCKET_NAME);

  const { data, error } = await bucket.upload(imageName, imageFile, {
    cacheControl: '3600',
    // in this case, we will _replace_ any
    // existing file with same name.
    upsert: true,
  });

  let url = null;

  if (!error) {
    url = bucket.getPublicUrl(
      data.Key.replace(`${BUCKET_NAME}/`, '')
    ).publicURL;
  }

  return { url, error };
}
