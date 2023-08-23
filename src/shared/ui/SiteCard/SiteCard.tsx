import cls from './SiteCard.module.scss'
import {classNames} from "../../lib/classNames/classNames";
import {FC} from "react";
import {LinkProps} from "react-router-dom";
import {AppLink} from "../AppLink/AppLink";

interface SiteCardProps extends LinkProps {
    className?: string | undefined;
}

export const SiteCard: FC<SiteCardProps> = (props) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;


    return (
        <div className={classNames(cls.SiteCard, className)}>
            <AppLink
                className={cls.link}
                to={to}
                {...otherProps}
            >
                {children}
            </AppLink>
        </div>
    );
};


