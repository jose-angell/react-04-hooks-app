import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

// interface UseContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'cheacking' | 'authenticated' | 'not-authenticated';

interface UserCoontextProps {
  //sate
  authStatus: AuthStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;
}


export const UserContext = createContext({} as UserCoontextProps);


// HOC -> Higher Order Component
export const UserContextProvider = ({children}: PropsWithChildren) => {
const [authStatus, setAuthStatus] = useState<AuthStatus>('cheacking');
const [user, setUser] = useState<User | null>(null);
const handlelogin = (userId:number) => {
  const user = users.find(user => user.id === userId);
  if(!user) {
    console.log('User not found');
    setUser(null);
    setAuthStatus('not-authenticated');
    return false;
  }

  setUser(user);
  setAuthStatus('authenticated');
  localStorage.setItem('userId', userId.toString());
  return true;
}
const handleLogout = () => {
  console.log('logout');
  setAuthStatus('not-authenticated');
  setUser(null);
  localStorage.removeItem('userId')
}
useEffect(() => {
  const storageUserId = localStorage.getItem('userId');
  if(storageUserId){
    handlelogin(+storageUserId);
    return;
  }
  handleLogout();
}, [])
  return <UserContext value={{
    authStatus:'cheacking',
    user:user,
    login: handlelogin,
    logout: handleLogout
  }}
  
  >{children}</UserContext>
}
