'use client'
import React, {useEffect} from 'react';
import {UserContext, UserContextType} from "@/contexts/userContext";
import {emitter} from "@/event/emitter";

interface CategoryProps {
    state: string;
}

const Category = ({state}: CategoryProps) => {

    useEffect(() => {
        const listener = (data: string) => {
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