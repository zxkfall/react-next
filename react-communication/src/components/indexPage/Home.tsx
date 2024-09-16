import React from 'react';
import {Card, Button, Input} from '@mui/material';
import {useUser} from "@/contexts/userContext";

export interface HomeProps {
    titleHandler: (param: string) => void;
}

export default function Home({titleHandler}: HomeProps) {

    const [value, setValue] = React.useState('');

    const {name, age} = useUser();

    return (
        <div>
            <Card>
                {name} + {age}
                <br/>
                <Input value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button onClick={() => titleHandler(value)}>Change Title</Button>
            </Card>
        </div>
    );
}