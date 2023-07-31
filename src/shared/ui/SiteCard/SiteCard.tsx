import cls from './SiteCard.module.scss'
import {classNames} from "../../lib/classNames/classNames";
import {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

interface SiteCardProps extends LinkProps {
    className?: string;
}

export const SiteCard: FC<SiteCardProps> = (props) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;


    return (
        // <div className={classNames(cls.SiteCard, className)}>
            <Link
                to={to}
                {...otherProps}
            >
                <div className={classNames(cls.SiteCard, className)}>
                    {children}
                </div>
            </Link>
         // </div>
    );
};


