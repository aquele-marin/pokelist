import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Chip from "@mui/material/Chip";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PokemonModal } from "../../molecules/PokemonModal";
import { PokemonData } from "../../../types/PokeAPI";

interface PokemonCardProps {
    name: string;
    url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {
    const pokemonName = name[0].toUpperCase() + name.slice(1);
    const [open, setOpen] = useState(false);

    interface UseQueryResult {
        isLoading: boolean;
        isError: boolean;
        error: any;
        data: PokemonData | undefined;
    }
    const { isLoading, isError, error, data }: UseQueryResult = useQuery({
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

    return isLoading || !data ? (
        <PokemonCardLoadingState />
    ) : isError ? (
        <PokemonCardErrorState error={error} />
    ) : (
        <Card
            sx={{
                display: "flex",
                justifyContent: "space-between",
                overflow: "visible",
            }}
        >
            <Box className="flex justify-between w-full bg-base-200">
                <Box className="flex flex-col justify-between m-2">
                    <CardContent className="flex flex-col">
                        <Typography
                            component="div"
                            variant="h5"
                            className="text-base-content dark:text-base-100"
                        >
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
                                    sx={{
                                        color: "hsl(var(--bc) / var(--tw-text-opacity))",
                                    }}
                                    key={i.toString()}
                                    className="text-base-content dark:text-base-100"
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
                        <div className="tooltip" data-tip="Informações">
                            <IconButton aria-label="info" onClick={handleOpen}>
                                <InfoIcon className="text-base-content dark:text-base-100" />
                            </IconButton>
                        </div>
                        <div className="tooltip" data-tip="Favoritar">
                            <IconButton aria-label="favorite">
                                {isFavorite() ? (
                                    <FavoriteIcon className="text-base-content" />
                                ) : (
                                    <FavoriteBorderIcon className="text-base-content" />
                                )}
                            </IconButton>
                        </div>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: "8rem" }}
                    className="bg-base-300 rounded-full m-4"
                    image={data.sprites.front_default}
                    alt="Live from space album cover"
                />
            </Box>
            <PokemonModal data={data} open={open} handleClose={handleClose} />
        </Card>
    );
}

function PokemonCardLoadingState() {
    return <div className="w-full h-[10rem] bg-base-300 animate-pulse"></div>;
}

function PokemonCardErrorState({ error }: any) {
    console.log(error.message);
    return (
        <div className="w-full h-[10rem] bg-base-200 flex flex-col justify-center items-center">
            <p className="font-bold mt-2 text-lg text-center">
                <span className="text-red-600">Houve um problema</span>
                <br />
                no site tente novamente mais tarde
            </p>
        </div>
    );
}
