import { RiReactjsLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaCamera } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { AiOutlineRobot } from 'react-icons/ai';
import { FaMicrochip } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMysql } from 'react-icons/si';
import { SiOracle } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";

import { motion } from "framer-motion";
import SectionTag from "./SectionTag";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div id="technologies" className="border-b border-neutral-800 pb-24">
            <div className="my-20">
                <SectionTag index="03" label="technologies" />
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="text-center text-4xl">
                    Technologies
                </motion.h2>
            </div>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                
                {/* React */}
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan"> {/* Adjusted padding */}
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <p className="text-center mt-2">React</p>
                </motion.div>

                {/* Python */}
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <DiPython className="text-7xl text-blue-400" />
                    </div>
                    <p className="text-center mt-2">Python</p>
                </motion.div>

                {/* TensorFlow */}
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiTensorflow className="text-7xl text-orange-400" />
                    </div>
                    <p className="text-center mt-2">TensorFlow</p>
                </motion.div>

                {/* LLM */}
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiOpenai className="text-7xl text-blue-400" />
                    </div>
                    <p className="text-center mt-2">LLM</p>
                </motion.div>

                {/* NLP */}
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiPytorch className="text-7xl text-orange-400" />
                    </div>
                    <p className="text-center mt-2">NLP</p>
                </motion.div>

                {/* Streamlit */}
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiStreamlit className="text-7xl text-red-400" />
                    </div>
                    <p className="text-center mt-2">Streamlit</p>
                </motion.div>

                {/* OpenCV */}
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiOpencv className="text-7xl text-blue-400" />
                    </div>
                    <p className="text-center mt-2">OpenCV</p>
                </motion.div>

                {/* Power BI */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiPowerbi className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">Power BI</p>
                </motion.div>

                {/* YoLo */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <FaCamera className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">YoLo</p>
                </motion.div>

                {/* RoboFlow */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <AiOutlineRobot className="text-7xl text-blue-400" />
                    </div>
                    <p className="text-center mt-2">Mediapipe</p>
                </motion.div>

                {/* Microchip */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <FaMicrochip className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">Iot</p>
                </motion.div>

                {/* Excel */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiMicrosoftexcel className="text-7xl text-green-400" />
                    </div>
                    <p className="text-center mt-2">Excel</p>
                </motion.div>


                {/* SQL */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiMysql className="text-7xl text-blue-400" />
                    </div>
                    <p className="text-center mt-2">SQL</p>
                </motion.div>


                {/* oracle */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiOracle className="text-7xl text-red-500" />
                    </div>
                    <p className="text-center mt-2">oracle</p>
                </motion.div>


                {/* docker */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiDocker className="text-7xl text-blue-500" />
                    </div>
                    <p className="text-center mt-2">Docker</p>
                </motion.div>



                {/* GCP */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:glow-cyan">
                        <SiGooglecloud className="text-7xl text-orange-500" />
                    </div>
                    <p className="text-center mt-2">GCP</p>
                </motion.div>
                
            </motion.div>
        </div>
    );
};

export default Technologies;
