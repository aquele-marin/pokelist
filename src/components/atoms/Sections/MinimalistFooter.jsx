import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Copyright } from "../Copyright";

export function MinimalistFooter({ title, description }) {
    return (
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                {title}
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                {description}
            </Typography>
            <Copyright />
        </Box>
    );
}
