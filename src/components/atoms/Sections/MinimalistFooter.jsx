import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Copyright } from "../Copyright";

export function MinimalistFooterComponent({ children }) {
    return (
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            {children}
            <Copyright />
        </Box>
    );
}

export function MFCTitle({ children }) {
    return (
        <Typography variant="h6" align="center" gutterBottom>
            {children}
        </Typography>
    );
}

export function MFCDescription({ children }) {
    return (
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            {children}
        </Typography>
    );
}
