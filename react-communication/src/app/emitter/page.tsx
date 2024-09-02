'use client'
import React, {useEffect, useState} from 'react';
import {emitter} from "@/event/emitter";
import EmitterChildPage from "@/components/EmitterChildPage";

const EmitterPage = () => {

    const eventType = 'test'
    const [value, setValue] = useState('')
    //emitter
    useEffect(() => {
        const listener = (data: string) => {
            setValue(data)
        }
        emitter.on(eventType, listener)
        return () => {
            emitter.off(eventType, listener)
        }
    }, []);


    return (
        <div>
            <h1>Emitter</h1>
            {value}
            <EmitterChildPage/>
        </div>
    );
};

export default EmitterPage;