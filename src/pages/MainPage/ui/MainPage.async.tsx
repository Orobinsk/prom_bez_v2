import { lazy } from 'react';

const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
     resolve(import('./MainPage'));
}));

export default MainPageAsync