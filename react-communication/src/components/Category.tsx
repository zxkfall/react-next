'use client'
import React from 'react';
import {UserContext, UserContextType} from "@/contexts/userContext";
import {Card} from "@mui/material";

interface CategoryProps {
    title: string;
}

const Category = ({title}: CategoryProps) => {
    return (
        <Card>
            <UserContext.Consumer>
                {
                    (user: UserContextType) => (
                        <div>
                            <h1>Category</h1>
                            <h2>User name is: {user.name}</h2>
                            <h2>Title is {title}</h2>
                        </div>
                    )
                }
            </UserContext.Consumer>
        </Card>
    );
};

export default Category;