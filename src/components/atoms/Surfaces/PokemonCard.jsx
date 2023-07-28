import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Chip from "@mui/material/Chip";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function PokemonCard({ name, url }) {
    const theme = useTheme();
    const [isHovering, setIsHovering] = useState(false);
    const { isLoading, isError, error, data } = useQuery({
        queryKey: [name],
        queryFn: fetchPokemon,
    });

    function handleHover(isHovering) {
        setIsHovering(isHovering);
    }

    function fetchPokemon() {
        return axios.get(url).then((res) => res.data);
    }

    function isFavorite() {
        return true;
    }

    return isLoading ? (
        <p>Loading...</p>
    ) : isError ? (
        <p>Error: {error.message}</p>
    ) : (
        <Card
            sx={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Box className="flex justify-between w-full shadow-md">
                <Box className="flex flex-col justify-between m-2">
                    <CardContent className="flex flex-col">
                        <Typography component="div" variant="h5">
                            {name[0].toUpperCase() + name.slice(1)}
                        </Typography>
                        <Box>
                            {data.types.map((type) => (
                                <Chip
                                    label={
                                        type.type.name[0].toUpperCase() +
                                        type.type.name.slice(1)
                                    }
                                    variant="outlined"
                                />
                            ))}
                        </Box>
                    </CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            // pl: 1,
                            // pb: 0,
                        }}
                    >
                        <IconButton aria-label="info">
                            <InfoIcon />
                        </IconButton>
                        <IconButton
                            aria-label="favorite"
                            onMouseEnter={() => handleHover(true)}
                            onMouseLeave={() => handleHover(false)}
                        >
                            {isFavorite() ? (
                                isHovering ? (
                                    <FavoriteBorderIcon />
                                ) : (
                                    <FavoriteIcon />
                                )
                            ) : isHovering ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </IconButton>
                        {/* <IconButton aria-label="previous">
                            {theme.direction === "rtl" ? (
                                <SkipNextIcon />
                            ) : (
                                <SkipPreviousIcon />
                            )}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === "rtl" ? (
                                <SkipPreviousIcon />
                            ) : (
                                <SkipNextIcon />
                            )}
                        </IconButton> */}
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
        </Card>
    );
}
