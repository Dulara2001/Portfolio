import { useState } from "react";

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const navItems = [
        { text: "Home", link: "#home" },
        { text: "About Me", link: "#about" },
        { text: "Technologies", link: "#technologies" },
        { text: "Experience", link: "#experience" },
        { text: "Research", link: "#research" },
        { text: "Projects", link: "#projects" },
        { text: "Certificates", link: "#certificates" },
        { text: "Contact Me", link: "#contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-70 backdrop-blur-lg bg-gray-900 shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-end items-center">
                    {/* Navbar Items aligned to the right */}
                    <div className="flex space-x-8 text-lg font-medium">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className={`relative transition-all duration-300 ease-in-out text-gray-300
                                    group hover:text-white ${hoveredLink === index ? "text-white" : ""}
                                `}
                                onMouseEnter={() => setHoveredLink(index)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                {item.text}
                                {/* Glowing Effect on Hover */}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content overlap */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;
