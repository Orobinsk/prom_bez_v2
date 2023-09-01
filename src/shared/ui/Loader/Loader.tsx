import './Loader.scss';
import {classNames} from "../../lib/classNames/classNames";

interface LoaderProps{
    className?:string;
}

export const Loader = ({ className }:LoaderProps) => (
    <div className={classNames('kinetic', className)}>
    </div>
);
