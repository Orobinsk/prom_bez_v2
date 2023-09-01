import React from 'react';
import {SiteCard} from "../../../shared/ui/SiteCard/SiteCard";
import {ReactComponent as IconA1} from '../../../shared/assets/icons/iconA1.svg'
import {RoutePatch} from "../../../shared/config/routeConfig/routeConfig";
import cls from './MainPage.module.scss'

const MainPage = () => {
    return (
            <div className={cls.sideCards}>
                <SiteCard to={RoutePatch.sections} >
                    <IconA1/>
                    <span>A.1 Общие требования по промышленной безопасности</span>
                </SiteCard>
                <SiteCard to={RoutePatch.sections}>
                    <IconA1/>
                    <span>A.1 Общие требования по промышленной безопасности</span>
                </SiteCard> <SiteCard to={RoutePatch.sections}>
                <IconA1/>
                <span>A.1 Общие требования по промышленной безопасности</span>
            </SiteCard> <SiteCard to={RoutePatch.sections}>
                <IconA1/>
                <span>A.1 Общие требования по промышленной безопасности</span>
            </SiteCard>
            </div>
    );
};

export default MainPage;
