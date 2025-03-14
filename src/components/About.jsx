import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex justify-center items-center"> {/* Centering container */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"> {/* Adjusted width to make sure it's centered */}
                    <p className="text-gray-300 mt-4">
                        👋 Hi! I'm Dulara Rathnayake, Fresh graduate in Data Science with experience in AI, machine learning, data science, and computer vision.
                    </p>
                    <p className="text-gray-300 mt-4">
                        🔍 Over the years, I've developed a strong interest in Artificial Intelligence and Machine Learning. I'm particularly fascinated by how these technologies can drive innovation and create meaningful solutions across various industries.
                    </p>
                    <p className="text-gray-300 mt-4">
                        🚀 My goal is to deepen my knowledge in AI and ML, contribute to impactful projects, and use data-driven insights to solve complex challenges and improve everyday life. I love working on projects that push the boundaries of technology and make a real difference.
                    </p>
                    <p className="text-gray-300 mt-4">
                        🏀 Outside of academics, I have a great passion for basketball. The teamwork, strategy, and energy of the game inspire me, and I enjoy the balance it brings to my life.
                    </p>
                    <p className="text-gray-300 mt-4">
                        💼 I'm always eager to connect with AI and Data Science professionals, exchange ideas, and explore new learning and collaboration opportunities. Let's connect and grow together! 🚀
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;


// import aboutImg from "../assets/about.jpg";
// import { motion } from "framer-motion";

// const About = () => {
//     return (
//         <div className="border-b border-neutral-900 pb-4 justify-center items-center">
//             <h2 className="my-20 text-center text-4xl">
//                 About
//                 <span className="text-neutral-500">Me</span>
//             </h2>
//             <div className="flex flex-wrap">
//                 {/* <motion.div 
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full lg:w-1/2 lg:p-8">
//                     <div className="flex items-center justify-center">
//                         <img className="rounded-2xl" src={aboutImg} alt="about" />
//                     </div>
//                 </motion.div> */}
//                 <motion.div 
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: 100 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full lg:w-1/2 ">
//                     <p className="text-gray-300 justify-center mt-4 ">
//                     👋 Hello! I'm Dulara Rathnayake, a dedicated student 🎓 pursuing a degree in Data Science. My journey in technology and analytics has been both exciting and enlightening.
//                     </p>
//                     <p className="text-gray-300 justify-center mt-4">
//                     🔍 Throughout my academic path, my interest in the AI and machine learning domain has blossomed. 
//                     I'm fascinated by its potential for groundbreaking innovation and its transformative impact across industries. 
//                     </p>
//                     <p className="text-gray-300 justify-center mt-4">
//                     🚀 My ambition is to delve deeper into the realm of AI and Machine Learning, contributing my skills and knowledge to 
//                     pioneering projects that drive data-driven insights to solve intricate challenges and enhance livelihoods.
//                     </p>
//                     <p className="text-gray-300 justify-center mt-4">
//                     🏀 Beyond academics, I find immense joy in basketball. The synergy, tactics, and exhilaration of the game resonate deeply 
//                     with me.
//                     </p>
//                     <p className="text-gray-300 justify-center mt-4">
//                     💼 I'm eagerly looking forward to connecting with professionals in the AI and Data Science community, exchanging ideas, 
//                     and exploring opportunities for collaboration and growth.
//                     </p>
//                     {/* <div className="flex justify-center lg:justify-start">
//                         <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
//                     </div> */}
//                 </motion.div>
//             </div >
//         </div >
//   );
// };

// export default About;
