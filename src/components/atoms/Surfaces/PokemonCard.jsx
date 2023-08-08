import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";
import { PokemonModal } from "../../molecules/PokemonModal";

export function PokemonCard({ name, url }) {
    const theme = useTheme();
    const pokemonName = name[0].toUpperCase() + name.slice(1);
    const [open, setOpen] = useState(false);
    const { isLoading, isError, error, data } = useQuery({
        queryKey: [name],
        queryFn: fetchPokemon,
    });

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    async function fetchPokemon() {
        return axios.get(url).then((res) => res.data);
    }

    function isFavorite() {
        return true;
    }

    return isLoading ? (
        <Skeleton variant="rounded" width={472} height={156} />
    ) : isError ? (
        <p>Error: {error.message}</p>
    ) : (
        <Card
            sx={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Box className="flex justify-between w-full">
                <Box className="flex flex-col justify-between m-2">
                    <CardContent className="flex flex-col">
                        <Typography component="div" variant="h5">
                            {pokemonName}
                        </Typography>
                        <Box>
                            {data.types.map((type, i) => (
                                <Chip
                                    label={
                                        type.type.name[0].toUpperCase() +
                                        type.type.name.slice(1)
                                    }
                                    variant="outlined"
                                    key={i.toString()}
                                />
                            ))}
                        </Box>
                    </CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Tooltip title="Informações">
                            <IconButton aria-label="info" onClick={handleOpen}>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Favoritar">
                            <IconButton aria-label="favorite">
                                {isFavorite() ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: "8rem" }}
                    className="bg-gray-100 rounded-full m-4"
                    image={data.sprites.front_default}
                    alt="Live from space album cover"
                />
            </Box>
            <PokemonModal data={data} open={open} handleClose={handleClose} />
        </Card>
    );
}
