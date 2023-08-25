import React, {useCallback} from 'react';
import Input from "../../../../shared/ui/Input/Input";
import {Button} from "../../../../shared/ui/Button/Button";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useAppDispatch} from "../../../../shared/lib/hook/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginLoading} from "../../model/selectors/getLoginloading/getLoginLoading";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {loginActions} from "../../model/slice/loginSlice";
import {useNavigate} from "react-router-dom";

export interface LoginFormProps {
    className?: string;

}


const LoginForm = ({className}: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);
    const navigate=useNavigate()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/')
        }
    }, [password, username]);

    return (
        <div className={classNames(cls.LoginForm, className)}>
            {error && <h3 className={cls.error}>Неверный логин или пароль</h3> }
            <Input
                placeholder={"Логин"}
                onChange={onChangeUsername}
                autofocus
                value={username}
            />
            <Input
                placeholder={"Пароль"}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                onClick={onLoginClick}
                className={cls.btn}
            >
                login
            </Button>
        </div>
    );
};

export default LoginForm;
