import React from 'react';
import Input from "../../../../shared/ui/Input/Input";
import {Button} from "../../../../shared/ui/Button/Button";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string;

}
const onChangeUsername = (value:string)=>{
    console.log(value)
};

const LoginForm = ({className}: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, className)}>
            <Input placeholder={"Логин"} onChange={onChangeUsername}  autofocus/>
            <Input placeholder={"Пароль"}/>
            <Button>
                login
            </Button>
        </div>
    );
};

export default LoginForm;
