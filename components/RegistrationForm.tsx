'use client'

import {Button, PasswordInput, TextInput} from "@mantine/core";
import {supabase} from "@/app/createClient";
import {SubmitHandler, useForm} from "react-hook-form";

import {createUser} from "@/app/actions/sign-up";

export interface RegistrationFormInterface{
    name: string,
    surname: string,
    email: string,
    password: string
}

export default function RegistrationForm() {
    const {register, handleSubmit}= useForm<RegistrationFormInterface>();
    const onSubmit:SubmitHandler<RegistrationFormInterface> = (data: RegistrationFormInterface) => createUser(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput label="Name" size="md" radius="md" {...register('name')}/>
            <TextInput label="Surname" size="md" mt="md" radius="md" {...register('surname')}/>
            <TextInput label="Email address" placeholder="hello@gmail.com" size="md" radius="md" mt="md" {...register('email')}/>
            <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" radius="md" {...register('password')}/>

            <Button fullWidth mt="xl" size="md" radius="md" color='orange' type='submit'>
                Register
            </Button>
        </form>
    )
}
