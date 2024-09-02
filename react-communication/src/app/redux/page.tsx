'use client'
import {Provider} from "react-redux";
import React from 'react';
import NumberPage from "@/app/redux/Number/page";
import {store} from "@/store/redux";

const ReduxPage = () => {
    return (
        <>
            <h1>Redux Page</h1>
            <Provider store={store}>
                <NumberPage/>
            </Provider>
        </>
    );
};

export default ReduxPage;