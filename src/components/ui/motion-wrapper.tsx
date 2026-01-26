'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'none';
    viewportOnce?: boolean;
}

export const MotionWrapper = ({
    children,
    className = '',
    delay = 0,
    duration = 0.5,
    animation = 'fade-up',
    viewportOnce = true,
}: MotionWrapperProps) => {
    const getVariants = () => {
        switch (animation) {
            case 'fade-up':
                return {
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                };
            case 'slide-left':
                return {
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'slide-right':
                return {
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'zoom-in':
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                };
            case 'fade-in':
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
            case 'none':
            default:
                return {
                    hidden: {},
                    visible: {},
                };
        }
    };

    const variants = getVariants();

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: viewportOnce, margin: '-50px' }}
            transition={{ duration, delay, type: 'spring', stiffness: 50 }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};
