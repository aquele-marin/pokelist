import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Pokelist
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
