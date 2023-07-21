import {ButtonHTMLAttributes, FC} from "react";
import cls from './Button.module.scss'
import {classNames} from "../../lib/classNames/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string | undefined;
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;


    return (
        <button
            type="submit"
            className={classNames(cls.Button,className)}
            {...otherProps}
        >
            {children}
        </button>

    );
};


