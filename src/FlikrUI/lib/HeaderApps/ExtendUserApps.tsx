// import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';

export interface ExtendUserAppsProps {
    extend: boolean;
    setExtend?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ExtendUserApps({ extend, setExtend }: ExtendUserAppsProps) {


    const ref = useRef<HTMLDivElement>(null);

    return (
        <AnimatePresence>
            {extend && <motion.div
                className="fixed sm:absolute inset-0 sm:inset-auto sm:top-20 sm:right-3 p-3 gap-4 h-full sm:h-auto sm:max-h-[calc(100dvh_-_96px)] cs-bg-1 cs-drop-3 cs-drop-c2 w-full sm:w-[calc(100dvw_-_24px)] sm:max-w-sm z-20 sm:rounded-xl flex flex-col items-stretch"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.2
                }}
                ref={ref}
            >
                <header className="">
                    <h2 className="">DevFlikr Apps</h2>
                    <button type="button" className="cs-b-round self-start ml-auto min-w-[40px]" onClick={() => setExtend?.(false)}><X size={20} absoluteStrokeWidth /></button>
                </header>
            </motion.div>}
        </AnimatePresence>
    );
}

export default ExtendUserApps;