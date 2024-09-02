'use client'
import React from 'react';
import Home from "@/components/Home";
import {UserProvider} from "@/contexts/userContext";
import Category from "@/components/Category";

export default function Index() {

    const [state, setState] = React.useState('initial state');

    const stateHandler = (param: string) => {
        alert(param);
        setState(param);
    }

    return (
        <>
            <UserProvider>
                <Home stateHandler={stateHandler}/>
                <Category state={state}/>
            </UserProvider>
        </>
    );
}