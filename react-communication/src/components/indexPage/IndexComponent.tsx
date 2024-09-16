'use client'
import React from 'react';
import Home from "@/components/indexPage/Home";
import {UserProvider} from "@/contexts/userContext";
import Category from "@/components/indexPage/Category";
import {Card, CardActionArea, CardContent, List, ListItem, Typography, Link} from "@mui/material";

const blogs = [
    {id: 1, title: 'Blog Title 1', content: 'Blog Content 1'},
    {id: 2, title: 'Blog Title 2', content: 'Blog Content 2'},
];

const IndexComponent = () => {

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
                <Card sx={{padding: 3, maxWidth: 400, margin: 'auto', boxShadow: 3}}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Cases Link
                    </Typography>
                    <List>
                        <ListItem>
                            <Link href="/emitter" variant="body1" underline="hover" color="primary">
                                Emitter
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/event" variant="body1" underline="hover" color="primary">
                                Event
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/redux" variant="body1" underline="hover" color="primary">
                                Redux
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/event" variant="body1" underline="hover" color="primary">
                                EventTarget
                            </Link>
                        </ListItem>
                    </List>
                </Card>
                {renderBlogs()}

                <Card sx={{padding: 3, maxWidth: 400, margin: 'auto', boxShadow: 3}}>
                    <Typography variant="h3" component="h1">
                        React props and hooks
                    </Typography>
                    <Typography variant="h5" component="h2">
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
                </Card>

            </UserProvider>
        </>
    );
}

export default IndexComponent;