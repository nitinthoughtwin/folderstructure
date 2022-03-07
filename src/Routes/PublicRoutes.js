import { Navigate, Route } from 'react-router-dom'
export const PublicRoutes = ({Component}) => {
  const auth = true;
  return auth ? <Component /> : <Navigate to="/dashboard" />
}