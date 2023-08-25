import React, {useCallback} from 'react';
import cls from "./NavBar.module.css"
import {Button} from "../../../shared/ui/Button/Button";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {RoutePatch} from "../../../shared/config/routeConfig/routeConfig";
import {AppLink} from "../../../shared/ui/AppLink/AppLink";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData} from "../../../entities/User/model/selectors/getUserAuthData/getUserAuthData";
import {useNavigate} from "react-router-dom";
import {userActions} from "../../../entities/User/model/slice/useSlice";

interface NavBarProps {
    className?: string | undefined;
}


const NavBar = ({className}: NavBarProps) => {
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.NavBar, className)}>
            <Button className={cls.home}>
                <AppLink to={RoutePatch.main} className={cls.links}>Промышленная безопасность</AppLink>
            </Button>
            {!authData && (
                <Button className={cls.login}>
                    <AppLink to={RoutePatch.login} className={cls.links}>Войти</AppLink>
                </Button>
            )}
            {authData && (
                <Button className={cls.login} onClick={onLogout}>
                  Выйти
                </Button>
            )}

        </div>
    );
};

export default NavBar;
