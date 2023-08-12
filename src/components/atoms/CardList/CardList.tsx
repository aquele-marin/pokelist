import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
interface CardListComponentProps {
    id?: string;
    className?: string;
    status: "loading" | "error" | "success";
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
    status,
}: CardListComponentProps) {
    return (
        <motion.div
            layout
            id={id}
            onScroll={onScroll}
            className={className}
            style={{
                display: "flex",
                backgroundColor:
                    status !== "success" ? "transparent" : "inherit",
            }}
        >
            {status == "success" ? (
                <Grid container spacing={1} xs={cols}>
                    {children}
                </Grid>
            ) : status == "error" ? (
                <CardListErrorState />
            ) : (
                <CardListLoadingState />
            )}
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

function CardListLoadingState() {
    return (
        <div className="w-full m-2 bg-gray-200 animate-pulse flex justify-center items-center">
            <CatchingPokemonIcon
                className="animate-spin"
                sx={{ fontSize: 64 }}
            />
        </div>
    );
}

function CardListErrorState() {
    return (
        <div className="w-full m-2 bg-gray-200 flex flex-col justify-center items-center">
            <div className="relative right-6">
                <SettingsIcon
                    sx={{ fontSize: 64 }}
                    color="error"
                    className="animate-spin-slow"
                />
                <SettingsOutlinedIcon
                    sx={{ fontSize: 64 }}
                    className="absolute left-11 top-3 animate-spin-slow-reverse"
                />
            </div>
            <p className="font-bold mt-2 text-lg text-center">
                <span className="text-red-600">Houve um problema</span>
                <br />
                no site tente novamente mais tarde
            </p>
        </div>
    );
}
