import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimRoutes } from '../components/AnimRoutes/AnimRoutes';

export function Routeses () {
    return (
        <Router>
            <Header />
            <AnimRoutes />
        </Router>
    );
}