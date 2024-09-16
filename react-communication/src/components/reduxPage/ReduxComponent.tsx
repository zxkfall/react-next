'use client'
import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/store/redux";
import NumberComponent from "@/components/reduxPage/NUmberComponents";

const ReduxComponent = () => {
    return (
        <>
            <h1>Redux Page</h1>
            <Provider store={store}>
                <NumberComponent/>
            </Provider>
        </>
    );
};

export default ReduxComponent;