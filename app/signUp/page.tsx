'use client'
import {
    Button,
    Paper,
    PasswordInput,
    TextInput,
    Title,
} from '@mantine/core';

import classes from './signUp.module.css';
import {createUser} from "@/app/signUp/req";
export default function SignUpPage() {
    console.log("render")
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form}>
                <Title order={2} className={classes.title}>
                    Welcome to Task Flow!
                </Title>
                <TextInput label="Name" size="md" radius="md"/>
                <TextInput label="Surname" size="md" mt="md" radius="md"/>
                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" radius="md" mt="md"/>
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" radius="md"/>

                <Button fullWidth mt="xl" size="md" radius="md" color='orange' onClick={createUser}>
                    Register
                </Button>
            </Paper>
        </div>
    );
}

