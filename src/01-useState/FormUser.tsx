import { useState, type ChangeEvent } from "react";

interface UserData {
    name: string,
    email: string
}
export const FormUser = () =>{
    const [user, setUser] = useState<UserData>({name: '', email: ''})
    const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }))
    }
    return (
        <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Form whit Object</h1>
        <input 
        type="text" 
        name="name"
        placeholder="name"
        value={user.name}
        className="bg-white text-black px-4 py-2 rounded-md"
        onChange={handleChangeUser}
        />
         <input 
        type="emil" 
        name="email"
        placeholder="email"
        value={user.email}
        className="bg-white text-black px-4 py-2 rounded-md"
        onChange={handleChangeUser}
        />
        <p>
            Datos: Nombre: <strong>{user.name || 'N/A'}</strong> | Email: <strong> {user.email || 'N/A'}</strong>
        </p>
    </div>
    );
}