import { useState } from "react";

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredLink(index);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

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
            {/* Navbar */}
            <nav style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",  // Only this line for justifyContent
                padding: "1rem 2rem",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                backgroundColor: "rgba(50, 50, 50, 0.8)", // Darker gray with opacity
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)", // Stronger shadow for better depth
                color: "#f5f5f5", // Light text color for contrast
                fontFamily: "'Arial', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.05rem",
                flexDirection: "row" // This line is important for horizontal layout
            }}>
                {/* Navbar Items */}
                <div style={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '1.5rem',  // Reduced gap between items
                    fontSize: '0.9rem',  // Decreased font size
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.03rem',  // Adjusted letter spacing for better appearance
                }}>
                    {/* Navbar Links */}
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            style={{
                                textDecoration: 'none',
                                color: hoveredLink === index ? '#ff6347' : '#f5f5f5',  // Tomato color on hover
                                transition: 'color 0.3s, text-shadow 0.3s, transform 0.3s',
                                padding: '0.5rem 1rem',
                                textTransform: 'uppercase',  // Ensures all navbar links are uppercase
                                fontWeight: 'bold',
                                letterSpacing: '0.05rem',  // Small spacing to improve readability
                                borderRadius: '5px',  // Slightly rounded corners for each item
                                cursor: 'pointer',  // Makes the cursor a pointer on hover
                                textShadow: hoveredLink === index ? '0 0 5px rgba(255, 255, 255, 0.6)' : 'none',  // Add glow effect
                                transform: hoveredLink === index ? 'scale(1.1)' : 'none',  // Slightly enlarge the item on hover
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Spacer to avoid content overlap */}
            <div style={{ height: '6rem' }}></div>
        </>
    );
};

export default Navbar;
