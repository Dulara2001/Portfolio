import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-base-950/90 text-lg text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.35)] backdrop-blur transition-colors hover:bg-cyan-400/10"
                    aria-label="Scroll to top"
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
