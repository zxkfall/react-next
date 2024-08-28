'use client'
import React, {createContext, ReactNode, useContext} from "react";

export type UserContextType = {
    name: string;
    age: number;
}

const UserContext = createContext<UserContextType>({});

const UserProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const user: UserContextType = {
        name: 'User Name',
        age: 25,
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = (): UserContextType => useContext(UserContext);

export {useUser, UserProvider, UserContext}
