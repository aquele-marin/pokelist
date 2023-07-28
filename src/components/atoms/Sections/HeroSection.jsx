import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export function HeroSectionTitle({ children }) {
    return (
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
        >
            {children}
        </Typography>
    );
}

export function HeroSectionDescription({ children }) {
    return (
        <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
        >
            {children}
        </Typography>
    );
}

export function HeroSectionButtons({ children }) {
    return (
        <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            {children}
            {/* <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button> */}
        </Stack>
    );
}

export function HeroSectionComponent({ children }) {
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                {children}
                {/* <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Album layout
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don&apos;t simply skip over it entirely.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Main call to action</Button>
                    <Button variant="outlined">Secondary action</Button>
                </Stack> */}
            </Container>
        </Box>
    );
}
