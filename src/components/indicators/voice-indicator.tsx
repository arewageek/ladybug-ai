import { motion } from "framer-motion";

const VoiceIndicator = () => {
    return (
        <div className="flex items-center space-x-1 h-6">
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="w-1 h-2 bg-white rounded"
                    animate={{
                        scaleY: [1, 1.5, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                    }}
                />
            ))}
        </div>
    );
};

export default VoiceIndicator;
