import { motion } from 'framer-motion';

const FadeIn = ({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    fullWidth = false
}) => {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: { x: 0, y: 0 }
    };

    const initial = {
        opacity: 0,
        ...directions[direction]
    };

    return (
        <motion.div
            initial={initial}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
