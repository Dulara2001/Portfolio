/* eslint-disable react/prop-types */
const SectionTag = ({ index, label }) => {
    return (
        <p className="text-center font-mono text-xs tracking-[0.3em] text-cyan-400/70">
            {`// ${index}_${label.toUpperCase()}`}
        </p>
    );
};

export default SectionTag;
