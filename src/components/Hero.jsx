import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/myself.jpg"
import displayPic from "../assets/me.jpg"
import { motion } from "framer-motion"

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
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Dulara Rathnayake
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Data Science Graduate at SLIIT
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Download Resume Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/1ez4RAKV8FWffrj_tfTORn0MZieHIGib9/view?usp=sharing" 
                            target="_blank" // Opens in a new tab
                            rel="noopener noreferrer" // Security best practice
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white font-semibold text-lg rounded-lg hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-300 transition-all duration-300">
                            Download Resume
                        </motion.a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            style={{
                                width: '500px',
                                height: '550px',
                                borderRadius: '60%',
                                objectFit: 'cover'
                            }}
                            src={profilePic}
                            alt="Dulara Rathnayake"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
