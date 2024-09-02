'use client'
import React, {useEffect, useState} from 'react';
import {emitter} from "@/event/emitter";

const EmitterPage = () => {

    const [emitterValue, setEmitterValue] = useState<string>()

    //emitter
    useEffect(() => {
        const listener = (data: string) => {
            console.log(data)
            setEmitterValue(data)
        }

        emitter.on('test', listener)

        return () => {
            emitter.off('test', listener)
        }
    }, []);


    return (
        <div>
            <h1>Emitter</h1>
            {emitterValue}
        </div>
    );
};

export default EmitterPage;