// src/contexts/Theme.js
import {createContext, useEffect, useState} from 'react';
import {getUser} from "../../api.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({username: "none"});

    function getBaseUser (){
        getUser('tickle122').then(user => {
            setUser(user)
        })
    }

    useEffect(() => {
        getBaseUser()
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};