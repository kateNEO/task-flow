import {Paper, Title,} from '@mantine/core';
import classes from './registration.module.css';
import RegistrationForm from "@/components/RegistrationForm";

export default function RegistrationPage() {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form}>
                <Title order={2} className={classes.title}>
                    Welcome to Task Flow!
                </Title>
                <RegistrationForm/>
            </Paper>
        </div>
    );
}

