import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { CardList } from "../../molecules/DataDisplay";
import { PokemonCard } from "../../atoms/Surfaces";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Grid from "@mui/material/Grid";

const defaultTheme = createTheme();

export default function Main() {
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
            <CardList.Component>
                <Grid container spacing={2}>
                    {data.pages.map((group) =>
                        group.results.map((pokemon) => (
                            <Grid item xs={4}>
                                <PokemonCard
                                    key={pokemon.url}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                />
                            </Grid>
                        ))
                    )}
                </Grid>
            </CardList.Component>
            {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            {isFetching && !isFetchingNextPage ? "Fetching..." : null}
        </ThemeProvider>
    );
}
