'use client'
import {Anchor, Button, PasswordInput, Text, TextInput} from "@mantine/core";
import {useForm} from "react-hook-form";

export interface LoginFormInterface {
    email: string;
    password: string
}

export function LoginForm() {
    const {register, handleSubmit} = useForm<LoginFormInterface>();
    return (
        <form>
            <TextInput label="Email" placeholder="hello@gmail.com" size="md" radius="md"/>
            <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" radius="md"/>
            <Button fullWidth mt="xl" size="md" radius="md" color='orange'>
                Login
            </Button>

            <Text ta="center" mt="md">
                Don&apos;t have an account?{' '}
                <Anchor fw={500} href="/registration" type='submit'>Register</Anchor>
            </Text>
        </form>
    )
}
