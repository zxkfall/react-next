'use client'
import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import Comment, {CommentProps} from "@/components/Comment";

const Blog = ({params}: Params) => {
    const {id} = params;

    const comments: CommentProps[] = [
        {id: 1, name: "John Doe", body: "This is a comment", email: "te@g.com"},
        {id: 2, name: "Jane Doe", body: "This is another comment", email: "k@k.com"},
        {id: 3, name: "John Smith", body: "This is a comment", email: "l@c.com"}
    ];


    return (
        <div>
            <h1>Blog {id}</h1>

            <div>
                <h2>Comments</h2>
                {comments && comments.map(comment => (
                    <Comment key={comment.id} {...comment}/>))
                }
            </div>
        </div>
    );
}

export default Blog;