'use client'
import React, {useEffect, useState} from 'react';
import {emitter, EmitterTypes} from "@/event/emitter";
import EmitterChildPage from "@/components/EmitterChildPage";

const EmitterPage = () => {

    const [value, setValue] = useState('')
    //emitter
    useEffect(() => {
        const listener = (data: string) => {
            setValue(data)
        }
        emitter.on(EmitterTypes.TEST, listener)
        return () => {
            emitter.off(EmitterTypes.TEST, listener)
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