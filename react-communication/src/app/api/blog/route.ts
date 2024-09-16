interface BlogData {
    id: number;
    title: string;
    content: string;
}

const blogs = [
    {id: 1, title: 'Blog Title 1', content: 'Blog Content 1'},
    {id: 2, title: 'Blog Title 2', content: 'Blog Content 2'},
];

export async function GET(req: Request) {
    // return Response.json(blogs);
    return new Response(JSON.stringify(blogs), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

