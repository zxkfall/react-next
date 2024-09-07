'use client'
import {Provider} from "react-redux";
import React from 'react';
import NumberComponent from "@/components/NUmberComponents";
import {store} from "@/store/redux";

const ReduxPage = () => {
    return (
        <>
            <h1>Redux Page</h1>
            <Provider store={store}>
                <NumberComponent/>
            </Provider>
        </>
    );
};

export default ReduxPage;