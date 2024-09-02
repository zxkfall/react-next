import React, {useState} from 'react';
import {Button, Input} from "@mui/material";
import {eventTarget, EventTypes} from "@/event/eventTarget";

const EventChildPage = () => {
    const [value, setValue] = useState<string>('')

    return (
        <div>
            <Input value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button
                onClick={() => eventTarget.dispatchEvent(new CustomEvent(EventTypes.EVENT_TARGET, {detail: value}))}>Send
                Event</Button>
        </div>
    );
};

export default EventChildPage;