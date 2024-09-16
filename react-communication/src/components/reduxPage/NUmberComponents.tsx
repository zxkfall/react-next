import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {decremented} from "@/store/redux";

const NumberComponent = () => {
    const value = useSelector((state: any) => state.value);
    const dispatch = useDispatch();

    return (
        <>
            <Button onClick={() => dispatch({type: 'counter/incremented'})}>+</Button>
            {value}
            <Button onClick={() => dispatch(decremented())}>-</Button>
            <Button onClick={() => dispatch({type: 'counter/incrementByAmount', payload: 10})}>+10</Button>
        </>
    );
};

export default NumberComponent;