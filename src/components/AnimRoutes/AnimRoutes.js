import React from 'react';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';
import { Portfolio } from '../../pages/Portfolio/Portfolio';
import { Routes, Route, useLocation } from 'react-router-dom';
 

export function AnimRoutes () {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/portfolio' Component={Portfolio} />
            <Route path='/contact' Component={Contact} />
        </Routes>
    );
}