"use client"

import { motion } from "framer-motion";

const ListeningIndicator = () => {
    return (
        <div className="relative flex items-center justify-center w-6 h-6">
            {[0.8, 1].map((scale, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full rounded-full bg-white opacity-30"
                    initial={{ scale, opacity: 0.8 }}
                    animate={{ scale: scale * 1.6, opacity: 0 }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 0.4,
                    }}
                />
            ))}

            <div className="relative flex items-center justify-center w-3 h-3 bg-white rounded-full shadow-lg"></div>
        </div>
    );
};

export default ListeningIndicator;