import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
    { id: "home", label: "HERO" },
    { id: "about", label: "ABOUT" },
    { id: "technologies", label: "TECHNOLOGIES" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "research", label: "RESEARCH" },
    { id: "projects", label: "PROJECTS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "contact", label: "CONTACT" },
];

const ScrollHUD = () => {
    const [active, setActive] = useState("HERO");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const match = SECTIONS.find((s) => s.id === entry.target.id);
                        if (match) setActive(match.label);
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden select-none font-mono text-[11px] leading-tight text-cyan-400/80 sm:block">
            <div className="rounded border border-cyan-500/20 bg-base-950/80 px-3 py-2 backdrop-blur">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={active}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                    >
                        TRACKING: {active}
                    </motion.p>
                </AnimatePresence>
                <p className="mt-1 text-cyan-400/50">SCROLL: {progress}%</p>
            </div>
        </div>
    );
};

export default ScrollHUD;
