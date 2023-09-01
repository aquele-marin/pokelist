import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export function Copyright() {
    return (
        <Typography
            variant="body2"
            align="center"
            className="text-base-content"
            // {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://pokelist.com/">
                Pokelist
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
