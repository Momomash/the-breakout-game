import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import { MainPage, GamePage, NotFoundPage } from '@/pages';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="game" element={<GamePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default Router;
