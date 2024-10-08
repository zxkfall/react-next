import React, {useState} from 'react';
import {Button, Input} from "@mui/material";
import {emitter, EmitterTypes} from "@/event/emitter";

const EmitterChildComponent = () => {

    const [value, setValue] = useState<string>('')

    return (
        <div>
            <Input value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button onClick={() => emitter.emit(EmitterTypes.TEST, value)}>Send Event</Button>
        </div>
    );
};

export default EmitterChildComponent;