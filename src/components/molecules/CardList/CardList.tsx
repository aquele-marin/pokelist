import { motion } from "framer-motion";

interface CardListComponentProps {
    children: React.ReactNode;
}

export function CardListComponent({ children }: CardListComponentProps) {
    return (
        <motion.div
            layout
            style={{ display: "flex", marginTop: "2rem", marginBottom: "2rem" }}
        >
            <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                style={{ margin: 8 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
