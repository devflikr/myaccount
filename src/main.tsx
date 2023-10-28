import React from 'react';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import { tippy } from '@tippyjs/react';
import OasisMenuProvider from 'oasismenu';
import { BrowserRouter } from 'react-router-dom';

import 'neatkit/styles.css';
import 'tippy.js/dist/tippy.css';
import "oasismenu/themes/space.css";
import 'tippy.js/animations/shift-away.css';

import './styles/index.scss';
import { Toaster } from 'react-hot-toast';

tippy.setDefaultProps({
    arrow: false,
    animation: "shift-away",
    delay: [200, 0],
    theme: 'tippy-theme',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <OasisMenuProvider theme="space">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </OasisMenuProvider>
        <Toaster position="bottom-center" />
    </React.StrictMode>,
);
