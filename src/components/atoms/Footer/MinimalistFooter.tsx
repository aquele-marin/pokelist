import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Copyright } from "../Copyright";
import React from "react";

interface MinimalistFooterComponentProps {
    children: React.ReactNode;
}

export function MinimalistFooterComponent({
    children,
}: MinimalistFooterComponentProps) {
    return (
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            {children}
            <Copyright />
        </Box>
    );
}

interface MFCTitleProps {
    children: React.ReactNode;
}

export function MFCTitle({ children }: MFCTitleProps) {
    return (
        <Typography variant="h6" align="center" gutterBottom>
            {children}
        </Typography>
    );
}

interface MFCDescriptionProps {
    children: React.ReactNode;
}

export function MFCDescription({ children }: MFCDescriptionProps) {
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
