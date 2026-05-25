'use client'
import Logo from '../public/logo.svg'
import Image from 'next/image';
import {
    Anchor,
    Button,
    Checkbox,
    PasswordInput,
    Paper,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import classes from './signIn.module.css';

export default function SignInPage() {
    return (
        <div className={classes.wrapper}>
            <Image src="/logo.svg" alt="Logo" width={400} height={250} />
            <Paper className={classes.form} >
                <Title order={2} className={classes.title}>
                    Welcome back to Task Flow!
                </Title>

                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" radius="md" />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" radius="md" />
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md" radius="md">
                    Login
                </Button>

                <Text ta="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Anchor href="#" fw={500} onClick={(event) => event.preventDefault()}>
                        Register
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}
