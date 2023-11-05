import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Denis',
            email: 'example@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <hr />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={handleLogin}>Login</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={handleLogout}>Logout</button>
            <p>User is {user?.name}</p>
            <p>email is {user?.email}</p>
        </div>
    );
};

export default User;