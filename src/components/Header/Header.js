import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { Social } from '../Social/Social';
import { MobileNav } from '../MobileNav/MobileNav';


export function Header() {
    return (
        <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
            <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
                <Link to={'/'} className="max-w-[200px]">
                    <img src={logo} width={160} height={160} alt="" />
                </Link>

                <nav className="hidden xl:flex gap-x-12 font-semibold">
                    <Link to={'/'} className="text-[#696c6d] hover:text-primary transition">Home</Link>
                    <Link to={'/about'} className="text-[#696c6d] hover:text-primary transition">About</Link>
                    <Link to={'/portfolio'} className="text-[#696c6d] hover:text-primary transition">Portfolio</Link>
                    <Link to={'/contact'} className="text-[#696c6d] hover:text-primary transition">Contact</Link>
                </nav>
            </div>

                <Social />
                <MobileNav />
        </header>
    );
}