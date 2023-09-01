import {lazy} from 'react';

const LearnPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./LearnPage'));
}));

export default LearnPageAsync