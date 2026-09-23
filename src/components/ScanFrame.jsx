/* eslint-disable react/prop-types */
const ScanFrame = ({ children, label, className = "" }) => {
    return (
        <div className={`group relative inline-block ${className}`}>
            {children}

            <span className="hud-corner hud-corner-tl" />
            <span className="hud-corner hud-corner-tr" />
            <span className="hud-corner hud-corner-bl" />
            <span className="hud-corner hud-corner-br" />

            <span className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-scan" />
            </span>

            {label && (
                <span className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full whitespace-nowrap rounded border border-cyan-400/40 bg-base-950/90 px-2 py-0.5 font-mono text-[10px] tracking-wider text-cyan-300 opacity-0 transition-all duration-300 group-hover:translate-y-1/2 group-hover:opacity-100">
                    {label}
                </span>
            )}
        </div>
    );
};

export default ScanFrame;
