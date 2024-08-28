'use client'
import React from 'react';
import {Card, CardContent, Typography, CardActionArea, Button, Input} from '@mui/material';
import Link from 'next/link';
import {useUser} from "@/contexts/userContext";
import mitt from "next/dist/shared/lib/mitt";


const blogs = [
    {id: 1, title: 'Blog Title 1', content: 'Blog Content 1'},
    {id: 2, title: 'Blog Title 2', content: 'Blog Content 2'},
];

interface HomeProps {
    stateHandler: (param: string) => void;
    emitter: mitt.Emitter;
}

export default function Home({stateHandler, emitter}: HomeProps) {

    const [value, setValue] = React.useState('');

    const {name, age} = useUser();
    return (
        <div>
            {blogs.map((blog) => (
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
            ))}
            <Card>
                {name} + {age}
                <br/>
                <Input value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button onClick={() => stateHandler(value)}>Change State</Button>
                <Button onClick={() => {
                    emitter.emit('test', 'event data')
                }}>Send Event</Button>
            </Card>
        </div>
    );
}