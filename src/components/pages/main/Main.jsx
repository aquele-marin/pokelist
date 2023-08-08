import { ThemeProvider } from "@emotion/react";
import { Divider, Typography, createTheme } from "@mui/material";
import { CardList } from "../../molecules/DataDisplay";
import { PokemonCard } from "../../atoms/Surfaces";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { HeroSection } from "../../atoms/Sections";

const defaultTheme = createTheme();

export function Main() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["pokemons"],
        queryFn: fetchPokemons,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    });

    function fetchPokemons() {
        return axios
            .get(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => res.data);
    }

    return status == "loading" ? (
        <p>Loading...</p>
    ) : status == "error" ? (
        <p>Error</p>
    ) : (
        <ThemeProvider theme={defaultTheme}>
            <HeroSection.Component>
                <HeroSection.Title>Bem Vindo ao PokeList</HeroSection.Title>
                <HeroSection.Description>
                    Confira seus pokemons favoritos e suas informações!! Entre
                    na aba Pokedex para favoritar e visualizar novos pokemons!
                </HeroSection.Description>
            </HeroSection.Component>
            <Divider />
            <Typography
                className="flex justify-center"
                variant="h2"
                component="h2"
            >
                Favoritos
            </Typography>
            <Divider />
            <CardList.Component>
                <Grid container spacing={2}>
                    {data.pages.map((group) =>
                        group.results.map((pokemon) => (
                            <Grid item xs={4} key={pokemon.url}>
                                <PokemonCard
                                    name={pokemon.name}
                                    url={pokemon.url}
                                />
                            </Grid>
                        ))
                    )}
                </Grid>
            </CardList.Component>
            {/* {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            {isFetching && !isFetchingNextPage ? "Fetching..." : null} */}
        </ThemeProvider>
    );
}
