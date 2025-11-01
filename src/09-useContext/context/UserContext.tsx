import { createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data";

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
  console.log({userId})
  return true;
}
const handleLogout = () => {
  console.log('logout')
}

  return <UserContext value={{
    authStatus:'cheacking',
    user:user,
    login: handlelogin,
    logout: handleLogout
  }}
  
  >{children}</UserContext>
}
