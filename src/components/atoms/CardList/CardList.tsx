import { motion } from "framer-motion";

interface CardListComponentProps {
    children: React.ReactNode;
}

export function CardListComponent({ children }: CardListComponentProps) {
    return (
        <motion.div
            layout
            style={{ display: "flex", marginTop: "0rem", marginBottom: "0rem" }}
        >
            {children}
        </motion.div>
    );
}

interface CardListItemProps {
    children: React.ReactNode;
}

export function CardListItem({ children }: CardListItemProps) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{ margin: 8 }}
        >
            {children}
        </motion.div>
    );
}
