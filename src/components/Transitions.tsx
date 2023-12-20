import { motion } from 'framer-motion';

interface Content {
    children: any
}

const Transitions = ({children}: Content) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 3}}
    
        >
            {children}
        </motion.div>
    )
}

export default Transitions