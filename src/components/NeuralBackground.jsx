import { useEffect, useRef } from "react";

const NODE_COLOR = "34, 211, 238";
const LINK_DIST = 140;
const CURSOR_DIST = 180;

const NeuralBackground = () => {
    const canvasRef = useRef(null);
    const gridRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const onScroll = () => {
            const y = window.scrollY;
            if (gridRef.current) {
                gridRef.current.style.transform = `translateY(${y * 0.12}px)`;
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translateY(${y * 0.25}px)`;
            }
        };
        if (!prefersReducedMotion) {
            window.addEventListener("scroll", onScroll, { passive: true });
        }

        let width, height, nodes, rafId;
        const pointer = { x: -9999, y: -9999 };

        const nodeCount = () =>
            Math.min(90, Math.max(30, Math.floor((width * height) / 22000)));

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            nodes = Array.from({ length: nodeCount() }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
            }));
        };

        const onPointerMove = (e) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        };
        const onPointerLeave = () => {
            pointer.x = -9999;
            pointer.y = -9999;
        };

        const step = () => {
            if (!prefersReducedMotion) {
                for (const n of nodes) {
                    n.x += n.vx;
                    n.y += n.vy;
                    if (n.x < 0 || n.x > width) n.vx *= -1;
                    if (n.y < 0 || n.y > height) n.vy *= -1;
                }
            }

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < LINK_DIST) {
                        ctx.strokeStyle = `rgba(${NODE_COLOR}, ${0.18 * (1 - dist / LINK_DIST)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                const cdx = nodes[i].x - pointer.x;
                const cdy = nodes[i].y - pointer.y;
                const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
                if (cdist < CURSOR_DIST) {
                    ctx.strokeStyle = `rgba(${NODE_COLOR}, ${0.35 * (1 - cdist / CURSOR_DIST)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(pointer.x, pointer.y);
                    ctx.stroke();
                }

                ctx.fillStyle = `rgba(${NODE_COLOR}, 0.7)`;
                ctx.beginPath();
                ctx.arc(nodes[i].x, nodes[i].y, 1.6, 0, Math.PI * 2);
                ctx.fill();
            }

            if (!prefersReducedMotion) {
                rafId = requestAnimationFrame(step);
            }
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerleave", onPointerLeave);

        step();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerleave", onPointerLeave);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-base-950">
            <div ref={gridRef} className="absolute -inset-x-0 -top-24 -bottom-24 grid-overlay opacity-60" />
            <div ref={glowRef} className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.12),rgba(5,7,10,0))]" />
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        </div>
    );
};

export default NeuralBackground;
