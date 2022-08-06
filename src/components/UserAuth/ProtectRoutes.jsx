import { Navigate, Outlet } from 'react-router-dom';
import { useStatus } from '../../state/hooks/userAuth.js';

export default function ProtectedRoutes() {
  const { user, profile } = useStatus();
  if (!user || !profile) {
    localStorage.setItem('location', window.location);
    <Navigate to="user" />;
    return;
  }
  return <Outlet />;
}
