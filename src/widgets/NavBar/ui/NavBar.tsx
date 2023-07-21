import React from 'react';
import cls from "./NavBar.module.scss"
import {Button} from "../../../shared/ui/Button/Button";
import {classNames} from "../../../shared/lib/classNames/classNames";

interface NavBarProps{
    className?: string | undefined;
}
const consolTest =(e: React.MouseEvent)=>{
    console.log('test')
}

const NavBar = ({ className }:NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar)}>
            <Button onClick={consolTest} className={cls.home}>Промышленная безопасность</Button>
            <Button className={cls.links}>Войти</Button>
        </div>
    );
};

export default NavBar;
