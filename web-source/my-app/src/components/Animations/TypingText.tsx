import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function TypingText({ text, className, textAlign }: { text: string, className?: string, textAlign?: string }) {
    const textArray = text.split("");
    const [textDisplay, setTextDisplay] = useState<string[]>([]);
    useEffect(() => {
        setTextDisplay([]);
        let i = 0;
        const interval = setInterval(() => {
            if (i < textArray.length) {
                setTextDisplay((prevTextDisplay) => [...prevTextDisplay, textArray[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {textDisplay.map((char, index) => {
                return (
                    <span key={index} className={className}>
                        {`${char}`}
                    </span>
                )
            })}
            <motion.span
                className={className}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity }}
            >_</motion.span>
        </div>
    )
}
