import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Copyright } from "../Copyright";

interface FooterProps {
    children?: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
    return (
        <Box className="flex flex-col relative clear bottom-0 w-screen">
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                    // backgroundColor: (theme) =>
                    //     theme.palette.mode === "light"
                    //         ? theme.palette.grey[200]
                    //         : theme.palette.grey[800],
                }}
                className="bg-base-200"
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">{children}</Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}
