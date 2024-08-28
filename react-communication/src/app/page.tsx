'use client'
import React from 'react';
import Home from "@/components/Home";
import {UserProvider} from "@/contexts/userContext";
import Category from "@/components/Category";
import mitt from "next/dist/shared/lib/mitt";

const emitter = mitt()
export default function Index() {

    const [state, setState] = React.useState('initial state');

    const stateHandler = (param) => {
        alert(param);
        setState(param);
    }

    return (
        <>
            <UserProvider>
                <Home stateHandler={stateHandler} emitter={emitter}/>
                <Category state={state} emitter={emitter}/>
            </UserProvider>
        </>
    );
}