'use client'
import React, {useEffect} from 'react';
import {UserContext, UserContextType} from "@/contexts/userContext";
import mitt from "next/dist/shared/lib/mitt";

interface CategoryProps {
    state: string;
    emitter: mitt.Emitter;
}
const Category = ({state, emitter}: CategoryProps) => {

    useEffect(() => {
        const listener = (data) => {
            console.log(data)
        }

        emitter.on('test', listener)

        return () => {
            emitter.off('test', listener)
        }

    }, [])

    return (
        <UserContext.Consumer>
            {
                (user: UserContextType) => (
                    <div>
                        <h1>Category</h1>
                        <h2>{user.name}</h2>
                        <h2>State is {state}</h2>
                    </div>
                )
            }
        </UserContext.Consumer>
    );
};

export default Category;