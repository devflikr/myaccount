import React, { useEffect, useLayoutEffect, useState } from 'react';
import { motion, useIsPresent, HTMLMotionProps } from 'framer-motion';

export interface AnimatedListItemProps extends HTMLMotionProps<"li"> {
    children?: React.ReactNode;
}

function AnimatedListItem({ ...props }: AnimatedListItemProps) {
    const isPresent = useIsPresent();
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (!isPresent) {
            setTimeout(() => setMounted(false), 500); // Set a delay before unmounting for the exit animation to complete
        } else {
            setMounted(true);
        }
    }, [isPresent]);

    useLayoutEffect(() => {
        if (isPresent) {
            setMounted(true);
        }
    }, [isPresent]);

    return (
        <motion.li
            initial={{ scale: 0, opacity: 0 }}
            animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring' }}
            style={{
                position: isPresent ? 'static' : 'absolute',
                left: '-100%',
            }}
            layout
            {...props}
        />
    );
}

export default AnimatedListItem;