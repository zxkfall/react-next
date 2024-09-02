'use client'
import React, {useEffect, useState} from 'react';
import {eventTarget, EventTypes} from "@/event/eventTarget";
import EventChildPage from "@/components/EventChildPage";

const EventTargetPage = () => {

    const [eventValue, setEventValue] = useState<string>()

    //event
    useEffect(() => {
        const listener = (e: Event) => {
            setEventValue((e as CustomEvent).detail)
        }
        eventTarget.addEventListener(EventTypes.EVENT_TARGET, listener)
        return () => {
            eventTarget.removeEventListener(EventTypes.EVENT_TARGET, listener)
        }
    }, []);


    return (
        <div>
            <h1>Event</h1>
            {eventValue}
            <EventChildPage/>
        </div>
    );
};

export default EventTargetPage;