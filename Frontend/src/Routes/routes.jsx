import React from 'react';
import { Route, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';

// Components
import Sidebar from '../components/shared_components/Sidebar';


const routes = [
    {
        path: "/about",
        routeElement: <AboutPage />
    },
    {
        path: "/profile",
        routeElement: <ProfilePage />
    }
];


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Sidebar />} >
            <Route index element={<HomePage />} />
            {routes.map((routeItem) => (
                <Route 
                    key={routeItem.path} 
                    path={routeItem.path} 
                    element={routeItem.routeElement} 
                />
            ))}
        </Route>
    )
)
