import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { CardList } from "../../atoms/CardList";
import { PokemonCard } from "../../organisms/PokemonCard";

export function Pokedex() {
    const {
        data,
        // error,
        fetchNextPage,
        hasNextPage,
        // isFetching,
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

    return (
        <CardList
            cols={12}
            id="list"
            // className="bg-gray-300 rounded-sm m-16 h-[48rem] overflow-scroll"
            className="flex overflow-scroll h-[48rem] m-16 rounded-sm"
            onScroll={handleScroll}
            status={status}
        >
            {data?.pages.map((group) =>
                group.results.map((pokemon: any) => (
                    <CardList.Item key={pokemon.url} cols={4}>
                        <PokemonCard name={pokemon.name} url={pokemon.url} />
                    </CardList.Item>
                ))
            )}
        </CardList>
    );
}

// {/* <Button
//     onClick={() => fetchNextPage()}
//     disabled={!hasNextPage || isFetchingNextPage}
// >
//     {isFetchingNextPage
//         ? "Loading more..."
//         : hasNextPage
//         ? "Load More"
//         : "Nothing more to load"}
// </Button>
// <Typography>
//     {isFetching && !isFetchingNextPage ? "Fetching..." : null}
// </Typography> */}
