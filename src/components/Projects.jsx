import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiCamera, FiMessageCircle, FiMic, FiBarChart2, FiMap, FiCpu } from "react-icons/fi";
import { FaTshirt } from "react-icons/fa";
import SectionTag from "./SectionTag";
import ScanFrame from "./ScanFrame";

const PROJECT_ICONS = {
    camera: FiCamera,
    garment: FaTshirt,
    chat: FiMessageCircle,
    voice: FiMic,
    iot: FiCpu,
    chart: FiBarChart2,
    travel: FiMap,
};

const Projects = () => {
    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <div className="my-20">
                <SectionTag index="06" label="projects" />
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl">
                    Projects
                </motion.h2>
            </div>
            {/* clickable GitHub link */}
            <div className="mt-8 text-center text-neutral-200">
                <p>You can find all the source codes and additional details on <a
                    href="https://github.com/Dulara2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-100 underline">GitHub</a>. Please visit.</p>
            </div>
            <div
                className="mt-10"
                style={{
                    maxHeight: 'calc(5 * 16rem)',
                    overflowY: 'auto',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#22d3ee #0f172a',
                }}
            >
                {PROJECTS.map((project, index) => {
                    const Icon = PROJECT_ICONS[project.icon] || FiCpu;
                    return (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.04, rotate: -1 }}
                            className="w-full lg:w-1/4">
                            <ScanFrame label={project.technologies[0]} className="mb-6">
                                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-2xl border-2 border-neutral-800 bg-neutral-900/40 ring-1 ring-cyan-500/10 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:glow-cyan">
                                    <Icon className="text-5xl text-cyan-400" />
                                </div>
                            </ScanFrame>
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.06 }}
                                        className="mr-2 inline-block rounded border border-cyan-500/20 bg-neutral-900 px-2 py-1 font-mono text-sm font-medium text-cyan-400">
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-cyan-300 hover:text-cyan-100 underline">
                                    View Demo
                                </a>
                            )}
                            <div>
                            {project.usedemolink && (
                                <a
                                    href={project.usedemolink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-300 hover:text-cyan-100 underline">
                                    Use Demo
                                </a>
                            )}
                            </div>
                            
                        </motion.div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
