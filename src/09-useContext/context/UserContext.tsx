import { type PropsWithChildren } from "react"

// interface UseContextProps {
//     children: React.ReactNode;
// }



export const UserContextProvider = ({children}: PropsWithChildren) => {
  return <>{children}</>
}
