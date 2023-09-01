import { lazy } from 'react';

const SectionsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
   resolve(import('./SectionsPage'))
}));

export default SectionsPageAsync