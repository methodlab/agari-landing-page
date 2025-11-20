import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const GeneticsParticle = ({ data, scrollY }) => {
    // Calculate parallax factor based on size (depth)
    // Smaller size = farther away = moves slower = higher positive Y offset to counteract scroll
    // Size ranges from 20 to 80. 
    // We want a noticeable effect, so we multiply by a factor.
    const depthFactor = (100 - data.size) * 4;
    const y = useTransform(scrollY, [0, 1000], [0, depthFactor]);

    return (
        <motion.div
            initial={{
                opacity: 0,
                top: "110%", // Start below the container
                left: `${data.x}%`,
                scale: 0.8
            }}
            animate={{
                opacity: [0, 0.15, 0.15, 0], // Fade in, stay visible, fade out
                top: "-20%", // Move to above the container
                rotate: [0, 360],
            }}
            transition={{
                duration: data.duration,
                repeat: Infinity,
                ease: "linear",
                delay: data.delay,
            }}
            style={{
                y, // Apply parallax transform
                position: 'absolute',
                width: data.type === 'circle' ? data.size : data.size / 4,
                height: data.size,
                borderRadius: data.type === 'circle' ? '50%' : '10px',
                backgroundColor: data.color,
                filter: 'blur(3px)', // Slight blur for depth
            }}
            className="opacity-10" // Base low opacity
        />
    );
};

const GeneticsHeroBackground = () => {
    const [elements, setElements] = useState([]);
    const { scrollY } = useScroll();

    useEffect(() => {
        // Generate random elements for the background
        const count = 20; // Increased count slightly for better coverage
        const newElements = Array.from({ length: count }).map((_, i) => {
            const duration = Math.random() * 20 + 20; // Random duration between 20s and 40s
            return {
                id: i,
                x: Math.random() * 100, // Random horizontal position %
                size: Math.random() * 60 + 20, // Random size between 20px and 80px
                duration: duration,
                delay: -Math.random() * duration, // Negative delay to start mid-animation
                type: Math.random() > 0.5 ? 'circle' : 'strand', // Randomly choose shape
                color: Math.random() > 0.5 ? '#204727' : '#9f2241', // Randomly choose brand green or red
            };
        });
        setElements(newElements);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {elements.map((el) => (
                <GeneticsParticle key={el.id} data={el} scrollY={scrollY} />
            ))}

            {/* Overlay to ensure text readability if needed, though opacity is low */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/50" />
        </div>
    );
};

export default GeneticsHeroBackground;
