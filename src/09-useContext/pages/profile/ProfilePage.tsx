import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { useContext } from 'react';
// import { useNavigate } from 'react-router';

export const ProfilePage = () => {
  const {user, logout} = useContext(UserContext);
  // const navigation = useNavigate();

  const handlelogout =() => {
    logout();
    // navigation('/login');
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 >Perfil del usuario</h1>
      <hr/>
      <pre className='my-4 w-[5=80%] overflow-x-auto'>{JSON.stringify(user, null, 2)}</pre>
      <Button variant="destructive" onClick={handlelogout}>Salir</Button>
    </div>
  )
}
