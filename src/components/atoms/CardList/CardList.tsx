import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
interface CardListComponentProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    cols: number;
    onScroll?: () => void;
}

export function CardListComponent({
    children,
    cols,
    id,
    className,
    onScroll,
}: CardListComponentProps) {
    return (
        <motion.div
            layout
            id={id}
            className={className}
            onScroll={onScroll}
            style={{ display: "flex" }}
        >
            <Grid container spacing={1} xs={cols}>
                {children}
            </Grid>
        </motion.div>
    );
}

interface CardListItemProps {
    children: React.ReactNode;
    cols: number;
}

export function CardListItem({ children, cols }: CardListItemProps) {
    return (
        <Grid item xs={cols}>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                style={{ margin: 8 }}
            >
                {children}
            </motion.div>
        </Grid>
    );
}
