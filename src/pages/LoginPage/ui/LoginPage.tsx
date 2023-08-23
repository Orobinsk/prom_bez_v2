import React from 'react';
import cls from './LoginPage.module.css'
import {LoginForm} from "../../../features/AithByUsername/ui";



const LoginPage = () => {
    return (
        <div className={cls.LoginPage}>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;
