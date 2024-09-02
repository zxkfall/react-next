import React, {useState} from 'react';
import {Button, Input} from "@mui/material";
import {emitter} from "@/event/emitter";

const EmitterChildPage = () => {

    const [value, setValue] = useState<string>('')

    return (
        <div>
            <Input value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button onClick={() => emitter.emit('test', value)}>Send Event</Button>
        </div>
    );
};

export default EmitterChildPage;