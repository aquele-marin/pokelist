import { Divider, Typography } from "@mui/material";
import { CardList } from "../../atoms/CardList/index.tsx";
import { PokemonCard } from "../../organisms/PokemonCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { HeroSection } from "../../atoms/HeroSection";

export function Main() {
    const {
        data,
        // error,
        // fetchNextPage,
        // hasNextPage,
        // isFetching,
        // isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["favoritePokemons"],
        queryFn: fetchPokemons,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        // getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    });

    function fetchPokemons() {
        return axios
            .get(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => res.data);
    }

    return (
        <>
            <HeroSection>
                <HeroSection.Title>Bem Vindo ao PokeList</HeroSection.Title>
                <HeroSection.Description>
                    Confira seus pokemons favoritos e suas informações!! Entre
                    na aba Pokedex para favoritar e visualizar novos pokemons!
                </HeroSection.Description>
            </HeroSection>
            <Divider />
            <Typography
                className="flex justify-center"
                variant="h2"
                component="h2"
            >
                Favoritos
            </Typography>
            <Divider />
            <CardList cols={12} status={status} className="flex min-h-[16rem]">
                {data?.pages.map((group) =>
                    group.results.map((pokemon: any) => (
                        <CardList.Item cols={4} key={pokemon.url}>
                            <PokemonCard
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        </CardList.Item>
                    ))
                )}
            </CardList>
        </>
    );
}
