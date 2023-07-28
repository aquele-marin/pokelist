import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function PokemonCard({ name, url }) {
    const theme = useTheme();

    const { isLoading, isError, error, data } = useQuery({
        queryKey: [name],
        queryFn: fetchPokemon,
    });
    function fetchPokemon() {
        return axios.get(url).then((res) => res.data);
    }

    return isLoading ? (
        <p>Loading...</p>
    ) : isError ? (
        <p>Error: {error.message}</p>
    ) : (
        <Card
            sx={{
                display: "flex",
                backgroundColor: "gray",
                justifyContent: "space-between",
            }}
        >
            <Box className="flex flex-col bg-gray-800">
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                        {name[0].toUpperCase() + name.slice(1)}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        Legal
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: "8rem", backgroundColor: "black" }}
                image={data.sprites.front_default}
                alt="Live from space album cover"
            />
        </Card>
    );
}
