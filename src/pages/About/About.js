import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import woman from '../../assets/img2.png';
import { transition1 } from '../../transition';

export function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="section"
        >
            <div className="container mx-auto h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
                    <div className="max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
                        <img width={400} src={woman} alt="" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={transition1}
                        className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center 
                        items-center lg:items-start"
                    >
                        <h1 className="h1">About</h1>
                        <p className="mb-12">
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page whenlooking at its layout. It is a long established fact that a reader will
                            be distracted by the readable content of a page whenlooking at its layout.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page whenlooking at its layout. It is a long established fact that a reader
                            will be distracted by the readable content of a page whenlooking at its layout.

                        </p>
                        <Link to={'/portfolio'} className="btn">View my work</Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}