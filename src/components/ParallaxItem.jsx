import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* eslint-disable react/prop-types */
const ParallaxItem = ({ children, strength = 30, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

export default ParallaxItem;
