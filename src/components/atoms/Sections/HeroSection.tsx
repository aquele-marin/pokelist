import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface HeroSectionTitleProps {
    children: React.ReactNode;
}

export function HeroSectionTitle({ children }: HeroSectionTitleProps) {
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

interface HeroSectionDescriptionProps {
    children: React.ReactNode;
}

export function HeroSectionDescription({
    children,
}: HeroSectionDescriptionProps) {
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

interface HeroSectioButtonsProps {
    children: React.ReactNode;
}

export function HeroSectionButtons({ children }: HeroSectioButtonsProps) {
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

interface HeroSectionComponentProps {
    children: React.ReactNode;
}

export function HeroSectionComponent({ children }: HeroSectionComponentProps) {
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
