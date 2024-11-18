import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import BaseLayout from './Layouts/BaseLayout';
import MainLayout from './Layouts/MainLayout';
import '../css/satoshi.css';
import '../css/style.css';

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    // resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx')),
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        const page = pages[`./Pages/${name}.jsx`];
    
        // Use a default layout if one is not specified
        page.default.layout = name === 'SignIn' ? (page) => <BaseLayout>{page}</BaseLayout> : (page) => <MainLayout>{page}</MainLayout>;
        return page.default;
      },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})