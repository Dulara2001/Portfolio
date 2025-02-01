import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="border-b border-neutral-900 pb-20">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <a href={`mailto:${CONTACT.email}`} className="border-b">
                    {CONTACT.email}
                </a>
            </div>

            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                {/* LinkedIn Icon with Link */}
                <a href="https://www.linkedin.com/in/dulara-rathnayake/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                
                {/* GitHub Icon with Link */}
                <a href="https://github.com/Dulara2001" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                {/* Instagram Icon with Link */}
                <a href="https://www.instagram.com/smartslides.ds/profilecard/?igsh=MWRlendsdjdtYWo0MA==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>

                {/* Youtube Icon with Link */}
                <a href="https://www.youtube.com/@SmartSlides-DS" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </div>
        </div>
    );
};

export default Contact;
