import { useUserContext } from 'context/user';

export const useLogout = () => {
  const { logout } = useUserContext();
  // Solo borrar usuario y conservar el catálogo de usuarios
  return () => {
    logout();
  };
};
