'use client'
import React from 'react';
import Home from "@/components/Home";
import {UserProvider} from "@/contexts/userContext";
import Category from "@/components/Category";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import Link from "next/link";

const blogs = [
    {id: 1, title: 'Blog Title 1', content: 'Blog Content 1'},
    {id: 2, title: 'Blog Title 2', content: 'Blog Content 2'},
];

export default function Index() {

    const [title, setTitle] = React.useState('initial title');

    const stateHandler = (value: string) => {
        setTitle(value);
    }

    function renderBlogs() {
        return blogs.map((blog) => (
            <Card key={blog.id} sx={{maxWidth: 345, margin: 2}}>
                <CardActionArea component={Link} href={`/blog/${blog.id}`}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blog.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        ));
    }

    return (
        <>
            <UserProvider>
                {renderBlogs()}
                <Typography variant="h4" component="h1">
                    {`Title is ${title}`}
                </Typography>
                <br/>
                <div style={{
                    display: 'flex',
                    gap: '20px',

                }}>
                    <Home titleHandler={stateHandler}/>
                    <Category title={title}/>
                </div>
            </UserProvider>
        </>
    );
}