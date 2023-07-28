import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { PokemonCard } from "../../atoms/Surfaces";

export function CardListComponent({ children }) {
    return (
        <motion.div
            layout
            style={{ height: "36rem", overflowY: "scroll", display: "flex" }}
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
