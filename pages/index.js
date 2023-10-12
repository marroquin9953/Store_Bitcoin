import { useRouter } from 'next/router';
import { useUserContext } from '../context/user';

export default function Initializer() {
  const router = useRouter();
  const { user } = useUserContext();
  // Asegúrate de que estemos en el navegador.
  if (typeof window !== 'undefined') {
    router.push(user?.user ? '/home' : '/signup');
  }

  return null;
}
