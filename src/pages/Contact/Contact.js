import React from "react";
import { motion } from "framer-motion";
import img11 from '../../assets/img11.jpg';
import { transition1 } from "../../transition";

export function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="section">
            <div className="container mx-auto h-full">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
                    <div className="hidden lg:flex absolute right-0 left-0 bottom-0 top-72 -z-10"></div>
                    <div className="lg:flex-1 lg:pt-32 px-4">
                        <h1 className="h1">Contact me</h1>
                        <p className="mb-12">I would love to get suggestions from you.</p>

                        <form className="flex flex-col gap-y-4 ">
                            <div className="flex gap-x-10">
                                <input
                                    className="outline-none border-b border-b-primary h-[60px] bg-transparent 
                                    font-secondary w-full pl-3 placeholder:text-[#757879]"
                                    type="text"
                                    placeholder="Your name"
                                />
                                <input
                                    className="outline-none border-b border-b-primary h-[60px] bg-transparent 
                                    font-secondary w-full pl-3 placeholder:text-[#757879]"
                                    type="text"
                                    placeholder="Your email"
                                />
                            </div>
                            <input
                                className="outline-none border-b border-b-primary h-[60px] bg-transparent 
                                font-secondary w-full pl-3 placeholder:text-[#757879]"
                                type="text"
                                placeholder="Your message"
                            />
                            <button className="bnt mb-[30px] mx-auto lg:mx-0 self-start">Send it</button>
                        </form>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={{ transition: transition1, duration: 1.5 }}
                        className="lg:flex-1"
                    >
                        <img src={img11} alt="" />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}