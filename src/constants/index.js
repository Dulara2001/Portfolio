import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpeg";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.jpeg";
import Certificate1 from "../assets/certificates/certificate1.jpg";
import Certificate2 from "../assets/certificates/certificate2.jpg";

export const HERO_CONTENT = `I am hardworking, dedicated person that chases dreams and goals in my life. I am very passionate and interested in the field of Artificial Intelligence, Machine Learning, Data Science and learning and being thorough with new technical and non-technical skills.`;

export const ABOUT_TEXT = `👋 Hi! I'm Dulara Rathnayake, a final-year student specializing in Data Science, graduating in 2024.🔍 Over the years, I've developed a strong interest in Artificial Intelligence and Machine Learning. I'm particularly fascinated by how these technologies can drive innovation and create meaningful solutions across various industries.🚀 My goal is to deepen my knowledge in AI and ML, contribute to impactful projects, and use data-driven insights to solve complex challenges and improve everyday life. I love working on projects that push the boundaries of technology and make a real difference.🏀 Outside of academics, I have a great passion for basketball. The teamwork, strategy, and energy of the game inspire me, and I enjoy the balance it brings to my life.💼 I'm always eager to connect with AI and Data Science professionals, exchange ideas, and explore new learning and collaboration opportunities. Let's connect and grow together! 🚀`;

export const EXPERIENCES = [
  {
    year: "2023 Dec - 2024 Jun",
    role: "intern - junior Database Administrator",
    company: " Mobitel(Pvt) Ltd",
    description: `As for the goals and purpose of SLT-MOBITEL for the internship program, it was to give practical, hands-on experience in database administration and improve the interns' technical skills and knowledge in the field. The internship was expected to help ease the day-to-day functioning of the Information Systems Division through interns’ skills in handling routine tasks and problemsolving. `,
    technologies: ["Sql", "Oracle", "VNCViewer", "Mobaxterm"],
    downloadLink: "https://drive.google.com/file/d/175rSA_1Pn_suh_Vzy5ZShi79fyUMzT2e/view?usp=sharing"
  },
  {
    year: "2024 Dec - Present",
    role: "Content Creator",
    company: " YouTube Channel - SmartSlides",
    description: `SmartSlides is a YouTube channel dedicated to simplifying complex topics in AI, machine learning, Data Science and other academic subjects. The channel aims to make learning accessible and efficient for students and professionals alike. `,
    technologies: ["AI","ML","Data Science"],
    Link: "https://www.youtube.com/@SmartSlides-DS"
  },
];


export const RESEARCH = [
  {
    year: "2023 Nov - 2024 Nov",
    title: " Integrated Human Motion Monitoring System for Enhanced Performance and Well-being in the Apparel Industry",
    sponser: "Sponsered By: MAS Linea Aqua R&D Team",
    description: `Analyzed advanced computer vision and machine learning techniques to recognize human motion in the apparel industry. Preprocessed movement video data for algorithm training and tested multiple motion recognition algorithms to ensure accuracy and compliance with industry standards. `,
    technologies: ["OpenCV", "Mediapipe", "Streamlit", "Machine Learning","Data Analyst"],
    downloadLink: "https://linea-flex.vercel.app/",
    Demo:"https://drive.google.com/file/d/1Ah8AZCMdZgwzCZtLanhhEbnTbFlxqu3l/view?usp=sharing"
  },
];


export const PROJECTS = [
  {
    title: "Smart Weather Analysis Dashboard with chatbot",
    image: project10,
    description:
      "The Smart Weather Analysis Dashboard is a comprehensive web application designed to provide historical weather data analysis, future weather predictions, and an interactive chatbot for answering weather-related queries.",
    technologies: ["Prophet", "Plotly", "Open-Meteo","Pandas","NumPy", "Streamlit"],
    link: "https://drive.google.com/file/d/1WSZyRoDpPAiFGICWjPh8ssmkM_bOyicr/view?usp=sharing"
  },
  {
    title: "Financial Agent with PhiData",
    image: project9,
    description:
      "AI-powered agents capable of retrieving financial data and performing web searches.Retrieves stock market data, analyst recommendations, fundamentals, and company news.Fetches relevant online information with source citations.",
    technologies: ["PhiData", "GROQ", "DuckDuckGo","YFinance", "Streamlit"],
    link: "https://drive.google.com/file/d/15xkA6xYzMHXn8nMoYgQAlRS30R57Gt3m/view?usp=sharing"
  },
  {
    title: "LLM application for interact with PDF",
    image: project8,
    description:
      "LLM application to interact with multiple PDF documents. The system uses FAISS vector embeddings to index and retrieve information, allowing users to upload PDFs, ask questions, and get accurate answers quickly and efficiently.",
    technologies: ["Google Gemini pro", "LangChain", "FAISS", "Streamlit"],
    link: "https://drive.google.com/file/d/1YBuxinEQnDV8rLmrChhmdVIbwKQ3PcUT/view?usp=sharing"
  },
  {
    title: "Email Generator Tool",
    image: project5,
    description:
      "An innovative tool to streamline personalized cold email outreach. This tool is designed to help professionals and services companies connect with potential employers or clients more effectively.",
    technologies: ["Llma", "LangChain", "GROQ", "Streamlit"],
    link: "https://drive.google.com/file/d/121cdfG53rcnjJ_vE-zxiIdAyv6lwoLTO/view?usp=sharing"
  },
  {
    title: "Diabetes Prediction System",
    image: project4,
    description:
      "Used data mining and machine learning techniques, effectively selecting and cleaning the dataset to ensure accurate results.Designed a user-friendly software interface for easy interaction with the prediction system, enhancing its accessibility and usability.",
    technologies: ["Tensorflow", "Streamlit", "MachineLearning", "DataMining"],
    link: "https://drive.google.com/file/d/1m3UVSh-ypqR3s9hit5CMXomp0ffEmIb5/view?usp=sharing",
    usedemolink:"https://diabetespredictionsystem-sliit-fdmproject.streamlit.app/"
  },
  {
    title: "Chatbot for Online Customer Support in E-commerce",
    image: project2,
    description:
      "Developed a custom framework for enhancing chatbot effectiveness tailored to a small clothing business.Led the development of a PyTorch-based model, enabling the chatbot to handle diverse client inquiries.",
    technologies: ["Data Analytics", "Machine Learning", "Data Mining"],
    link: "https://drive.google.com/file/d/1_RSQcLxkKVMpw2bAsT_-C6HBFVnHGAQp/view?usp=sharing"
  },
  {
    title: "Smart Home IoT System for Temperature Management",
    image: project6,
    description:
      "smart home system that automatically manages indoor temperature based on the Heat Index (HI) calculated from real-time temperature and humidity data. The project involved integrating sensors for data collection, utilizing MQTT protocols for communication, and implementing an ARIMA model to predict historical and future HI values. ",
    technologies: ["Iot","Data Analytics", "Machine Learning", "Data Mining"],
    link: "https://drive.google.com/file/d/1Nb1maWHzOrFK5vONuqPDB5KDEbqugR_7/view?usp=sharing"
  },
  {
    title: "PowerBI Dashboard Design Project",
    image: project1,
    description:
      "Developed interactive and visually engaging dashboard.Provided valuable insights for data-driven and decision-making. Incorporated a range of visualization, interactive filters and drill down features to present data.",
    technologies: ["Data Analytics", "PowerBI"],
    link:"https://github.com/Dulara2001/PowerBI-Projects.git"
  },
  
  {
    title: " Travel & Tourism Management System",
    image: project7,
    description:
      "Travel and tourism management system to book tours from anywhere in the world through a single dynamic website that helps users to know all locations and tour details on a single website.this web application helps a tourist who is planning to travel to which places he will travel, whether there are accommodation facilities around those places, whether they are safe, and which transport will be used as a solution for the journey.",
    technologies: ["MERN stack"],
  },
  
];



export const CERTIFICATES = [
  {
    id: 1,
    image: Certificate1,
    title: 'Certificate 1'
  },
  {
    id: 2,
    image: Certificate2,
    title: 'Certificate 2'
  },
];


export const CONTACT = {
  address: "Kandy , Sri Lanka ",
  phoneNo: "+94 714723501 ",
  email: "dulararathnayake519@gmail.com",
};
