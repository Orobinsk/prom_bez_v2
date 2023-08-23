import React from 'react';
import cls from "./NavBar.module.css"
import {Button} from "../../../shared/ui/Button/Button";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {RoutePatch} from "../../../shared/config/routeConfig/routeConfig";
import {AppLink} from "../../../shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string | undefined;
}

const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, className)}>
            <Button className={cls.home}>Промышленная безопасность</Button>
            <Button className={cls.login}>
                <AppLink to={RoutePatch.login} className={cls.links}>Войти</AppLink>
            </Button>
        </div>
    );
};

export default NavBar;
