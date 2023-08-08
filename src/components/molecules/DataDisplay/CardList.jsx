import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { PokemonCard } from "../../atoms/Surfaces";

export function CardListComponent({ children }) {
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
