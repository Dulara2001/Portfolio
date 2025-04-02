import { useState } from "react";

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // For mobile menu toggle

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
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Navbar Items for larger screens */}
                    <div className="hidden lg:flex space-x-8 text-lg font-medium ml-auto">
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

                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-50">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-6 text-white text-3xl"
                        onClick={() => setIsMenuOpen(false)}  // Close menu when clicked
                    >
                        &times;
                    </button>

                    {/* Navigation Items */}
                    <div className="flex flex-col space-y-6 text-2xl font-medium text-white">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="transition-all duration-300 ease-in-out hover:text-pink-300"
                                onClick={() => setIsMenuOpen(false)}  // Close menu when a link is clicked
                            >
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Spacer to prevent content overlap */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;
