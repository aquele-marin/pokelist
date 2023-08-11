import Box from "@mui/material/Box";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { CardList } from "../../atoms/CardList";
import { PokemonCard } from "../../organisms/PokemonCard";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export function Pokedex() {
    const {
        data,
        // error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["pokemons"],
        queryFn: fetchPokemons,
        getNextPageParam: (lastPage) => {
            return lastPage.next;
        },
    });

    function fetchPokemons({
        pageParam = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
    }) {
        return axios.get(pageParam).then((res) => res.data);
    }

    function handleScroll() {
        if (isFetchingNextPage || !hasNextPage) return;

        const listElement = document.getElementById("list");
        var heightBound = Number(listElement?.scrollHeight) * 0.8;
        if (heightBound < Number(listElement?.scrollTop)) {
            fetchNextPage();
        }
    }

    return status == "loading" ? (
        <p>Loading...</p>
    ) : status == "error" ? (
        <p>Error</p>
    ) : (
        <Box
            onScroll={handleScroll}
            id="list"
            className="bg-gray-300 m-16 h-[48rem] overflow-scroll"
        >
            <CardList.Component>
                <Grid container spacing={1}>
                    {data.pages.map((group) =>
                        group.results.map((pokemon: any) => (
                            <Grid item xs={4} key={pokemon.url}>
                                <CardList.Item>
                                    <PokemonCard
                                        name={pokemon.name}
                                        url={pokemon.url}
                                    />
                                </CardList.Item>
                            </Grid>
                        ))
                    )}
                </Grid>
            </CardList.Component>
            <Button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
            >
                {isFetchingNextPage
                    ? "Loading more..."
                    : hasNextPage
                    ? "Load More"
                    : "Nothing more to load"}
            </Button>
            <Typography>
                {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </Typography>
        </Box>
    );
}
