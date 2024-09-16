import React from 'react';
import {Card} from "@mui/material";

export interface CommentProps {
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comment = ({name, email, body}: CommentProps) => {
    return (
        <div>
            <Card style={{
                margin: 8
            }}>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{body}</p>
            </Card>
        </div>
    );
};

export default Comment;