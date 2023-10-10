import { motion } from 'framer-motion';

interface Content {
    children: any
}

const Transitions = ({children}: Content) => {
    return (
        <motion.div
            initial={{marginTop: -30, opacity: 0}}
            animate={{marginTop: 0, opacity: 1}}
            exit={{marginTop: -30, opacity: 0}}
            transition={{duration: 2}}
    
        >
            {children}
        </motion.div>
    )
}

export default Transitions