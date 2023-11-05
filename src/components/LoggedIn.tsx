import { useState } from "react";

const LoggedIn = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(0)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>{isLoggedIn.length ? 'user logged in' : 'user logged out'}</p>
        </div>
    );
};

export default LoggedIn;