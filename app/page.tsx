import classes from './signIn.module.css';
import {
    Paper,
    Title,
} from '@mantine/core';
import {LoginForm} from "@/components/LoginForm";

export default function SignInPage() {
    return (
        <div className={classes.wrapper}>
            <img src="/logo.svg" alt="Logo" className="w-1/4 h-auto"/>
            <Paper className={classes.form}>
                <Title order={2} className={classes.title}>
                    Welcome back to Task Flow!
                </Title>
                <LoginForm/>
            </Paper>
        </div>
    );
}
