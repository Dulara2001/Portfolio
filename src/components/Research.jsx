import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { RESEARCH } from "../constants";
import SectionTag from "./SectionTag";

const Research = () => {
    const trackRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start 0.85", "end 0.6"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div id="research" className="border-b border-neutral-900 pb-4">
            <div className="my-20">
                <SectionTag index="05" label="research" />
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl">
                    Research
                </motion.h2>
            </div>

            <div ref={trackRef} className="relative">
                <div className="absolute left-2 top-1 bottom-1 w-px bg-neutral-800" />
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-2 top-1 w-px bg-gradient-to-b from-cyan-400 to-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                />

                {RESEARCH.map((research, index) => (
                    <div key={index} className="relative mb-8 flex flex-wrap pl-8 lg:justify-center">
                        <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="absolute left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                        />
                        <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{research.year}</p>
                        </motion.div>
                        <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {research.title} -{" "}
                                <span className="text-sm text-cyan-200">
                                {/* {research.sponser} */}
                                </span>
                            </h6>
                            <div>
                            {research.sponser}
                            </div>
                            <p className="mb-4 text-neutral-400">{research.description}</p>
                            <div className="mb-4">
                            {research.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: techIndex * 0.06 }}
                                className="mr-2 mt-4 inline-block rounded border border-cyan-500/20 bg-neutral-900 px-2 py-1 font-mono text-sm
                                font-medium text-cyan-400"
                              >
                                {tech}
                              </motion.span>
                            ))}
                            </div>
                            {research.downloadLink && (
                                <a
                                    href={research.downloadLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-300 hover:text-cyan-100 underline">
                                    View All The Details About Research Here!
                                </a>
                            )}
                            <div>
                            {research.Demo && (
                                <a
                                    href={research.Demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-300 hover:text-cyan-100 underline">
                                    Watch Demo
                                </a>
                            )}
                            </div>

                        </motion.div>
                    </div>

                ))}

            </div>
        </div>
    );
}

export default Research
