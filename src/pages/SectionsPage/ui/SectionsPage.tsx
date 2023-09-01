import React from 'react';
import {SiteCard} from "../../../shared/ui/SiteCard/SiteCard";
import {RoutePatch} from "../../../shared/config/routeConfig/routeConfig";

const SectionsPage = () => {
    return (
        <div>
            Sections Page
<SiteCard to={RoutePatch.learn}>
    side card
</SiteCard>
        </div>
    );
};

export default SectionsPage;
