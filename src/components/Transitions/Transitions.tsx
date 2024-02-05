import { motion } from "framer-motion";

interface IProps {
  children: JSX.Element | string | JSX.Element[];
}

const Transitions = ({ children }: IProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
  >
    {children}
  </motion.div>
);

export default Transitions;
