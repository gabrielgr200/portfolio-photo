import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img3 from '../../assets/img5.png';
import img4 from '../../assets/img5.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img5.png';
import { transition1 } from '../../transition';

export function Portfolio() {
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="section"
        >
            <div className="container mx-auto h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={transition1}
                        className="flex flex-col lg:items-start"
                    >
                        <h1 className="h1">Portfolio</h1>
                        <p className="mb-5 max-w-sm">
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page whenlooking at its layout. It is a long established fact that a reader will
                            be distracted by the readable content of a page whenlooking at its layout.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page whenlooking at its layout. It is a long established fact that a reader
                            will be distracted by the readable content of a page whenlooking at its layout.
                        </p>
                        <Link to={'/contact'} className="btn">Hire me</Link>
                    </motion.div>
                    <div className="grid grid-cols-2 lg:gap-2">
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <div>
                                <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={img3} alt="" />
                            </div>
                        </div>
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <div>
                                <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={img4} alt="" />
                            </div>
                        </div>
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <div>
                                <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={img5} alt="" />
                            </div>
                        </div>
                        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <div>
                                <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={img6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}