import { lazy } from 'react';

// const LoginPageAsync = lazy(() => new Promise((resolve) => {
//     // @ts-ignore
//     // ТЕСТ ЗАДЕРЖКИ СЕРВЕРА!!!
//     setTimeout(() => resolve(import('./LoginPage')), 15000);
// }));

const LoginPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./LoginPage'));
}));

export default LoginPageAsync