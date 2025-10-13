import { useEffect, useState } from "react"

interface User {
    id: number,
    name: string,
    email: string
}


export const UserDataOnesTimes = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        // simulacion de llamada a api
        const fetchUserData = () => {
            setTimeout (() => {
                const data: User = {
                    id:1,
                    name:"jose",
                    email:"jose@email.com",
                };
                setUser(data);
                setIsLoading(false);
            }, 1500);
        };
        fetchUserData();
    }, []); // [] indica que solo se ejecutara una sola vez, al montar el componete
    if(isLoading){
        return <div className="bg-gradient flex flex-col gap-4">
                 <h1 className="text-2xl font-thin text-white">Loading user data</h1>
               </div>
    }
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">User data ones time</h1>
            { user && (
                <>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </>)
            }
        </div>
    )
}