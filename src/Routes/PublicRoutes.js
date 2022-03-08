import { Navigate, Route } from 'react-router-dom'

export const PublicRoutes = ({Component , isUser}) => {
  const auth = isUser;
  return auth ?  <Navigate to="/" /> :<Component />
} 