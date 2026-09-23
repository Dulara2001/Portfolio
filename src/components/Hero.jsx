import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/myself.jpg"
import displayPic from "../assets/me.jpg"
import { motion } from "framer-motion"
import ScanFrame from "./ScanFrame"
import ParallaxItem from "./ParallaxItem"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.p
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="font-mono text-xs tracking-[0.3em] text-cyan-400/70">
                            {"// init(): computer_vision_engineer"}
                        </motion.p>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-4 lg:text-8xl">
                            Dulara Rathnayake
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            AI/ML Engineer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Download Resume Button */}
                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 flex flex-wrap gap-4"
                        >
                            <a
                                href="https://drive.google.com/file/d/1S5vJKs5r5zKjF1Tw2DoLkCbGjEjRtNcX/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-600 text-neutral-950 font-semibold text-lg rounded-lg glow-cyan hover:bg-gradient-to-l hover:from-cyan-600 hover:to-cyan-400 transition-all duration-300"
                            >
                                Download Resume
                            </a>

                            <a
                                href="#contact"
                                className="px-8 py-3 border border-cyan-400/50 text-cyan-300 font-semibold text-lg rounded-lg hover:bg-cyan-400/10 hover:glow-cyan transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <ParallaxItem strength={50}>
                                <ScanFrame label="CV_MODEL: active">
                                    <img
                                        style={{
                                            width: '500px',
                                            height: '550px',
                                            borderRadius: '60%',
                                            objectFit: 'cover'
                                        }}
                                        className="ring-1 ring-cyan-400/30"
                                        src={profilePic}
                                        alt="Dulara Rathnayake"
                                    />
                                </ScanFrame>
                            </ParallaxItem>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
