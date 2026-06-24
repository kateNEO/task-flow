import classes from './signIn.module.css';
import {
    Anchor,
    Button,
    PasswordInput,
    Paper,
    Text,
    TextInput,
    Title,
} from '@mantine/core';

export default function SignInPage() {
    console.log("render")
    return (
        <div className={classes.wrapper}>
            <img src="/logo.svg" alt="Logo" className="w-1/4 h-auto"/>
            <Paper className={classes.form}>
                <Title order={2} className={classes.title}>
                    Welcome back to Task Flow!
                </Title>

                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" radius="md"/>
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" radius="md"/>
                <Button fullWidth mt="xl" size="md" radius="md" color='orange'>
                    Login
                </Button>

                <Text ta="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Anchor fw={500} href="/registration">Register</Anchor>
                </Text>
            </Paper>
        </div>
    );
}
