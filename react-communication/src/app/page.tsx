import React from 'react';
import IndexComponent from "@/components/indexPage/IndexComponent";

const IndexPage = async () => {

    const blogs = await fetch('http://localhost:3000/api/blog')
        .then(res => res.json());

    return (
        <IndexComponent blogs={blogs}/>
    );
}

export default IndexPage;