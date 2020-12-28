import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Header() {
    return (
        <div>

        </div>
    )
}

function FirstTable(props) {
    const [pokeList, setPokeList] = useState([]);
    const [pokeListOffset, setPokeListOffset] = useState(0);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pokeListOffset}&limit=20`);
            let vetor = [];
            for (const pokemon of response.data.results) {
                const _response = await axios.get(pokemon.url);
                vetor.push(_response.data);
            }
            setPokeList(vetor);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, [pokeListOffset]);

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Weight</th>
                    <th>Image</th>
                    <th>Fav</th>
                </tr>
                {
                    pokeList.length > 0 &&
                    pokeList.map(pokemon => {
                        return (
                            <tr>
                                <td>
                                    {pokemon.name}
                                </td>
                                <td>
                                    {
                                        pokemon.types.map(type => {
                                            return type.type.name+" ";
                                        })
                                    }
                                </td>
                                <td>
                                    {pokemon.weight}
                                </td>
                                <td>
                                    <img src={pokemon.sprites.front_default}/>
                                </td>
                                <td>
                                    {
                                    props.pokeController.searchPokemon(pokemon) ? 
                                    <a href="#" onClick={() => props.pokeController.deletePokemon(pokemon)}>
                                        Unfav
                                    </a>
                                    : 
                                    <a href="#" onClick={() => props.pokeController.savePokemon(pokemon)}>
                                        Fav
                                    </a>
                                    }
                                    
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <div>
                <a href="#" onClick={() => setPokeListOffset(pokeListOffset+20)}>
                    Próxima
                </a>
            </div>
        </div>
    )
}

function SecondTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Unfav
                    </th>
                </tr>
                {props.favPokeList.length > 0 && 
                props.favPokeList.map(pokemon => {
                    return (
                        <tr>
                            <td>
                                {pokemon.name}
                            </td>
                            <td>
                                <img src={pokemon.sprites.front_default}/>
                            </td>
                            <td>
                                <a href="#" onClick={() => props.pokeController.deletePokemon(pokemon)}>
                                    Unfav    
                                </a>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

function Body(props) {

    const [favPokeList, setFavPokeList] = useState([]);
    const [pokeController, setPokeController] = useState({
        savePokemon: (pokemon) => {
            // let vetor = favPokeList.slice();
            let vetor = localStorage.getItem("favoritesPokemons") != null ? JSON.parse(localStorage.getItem("favoritesPokemons")).list:[]
            vetor.push(pokemon);
            setFavPokeList(vetor);
            localStorage.setItem("favoritesPokemons", JSON.stringify({ list: vetor})); // pode ser aqui
        },
        deletePokemon: (pokemon) => {
            // let vetor = favPokeList.filter(_pokemon => _pokemon.name != pokemon.name);
            let vetor = localStorage.getItem("favoritesPokemons") != null ? JSON.parse(localStorage.getItem("favoritesPokemons")).list:[]
            vetor = vetor.filter(_pokemon => _pokemon.name != pokemon.name);
            setFavPokeList(vetor);
            localStorage.setItem("favoritesPokemons", JSON.stringify({ list: vetor}));
        },
        searchPokemon: (pokemon) => {
            const vetor = localStorage.getItem("favoritesPokemons") != null ? JSON.parse(localStorage.getItem("favoritesPokemons")).list:[]
            for (const _pokemon of vetor) {
                if (pokemon.name == _pokemon.name) return true;
            }
            return false;
        }
    })

    useEffect(() => {
        const list = localStorage.getItem("favoritesPokemons") != null ? JSON.parse(localStorage.getItem("favoritesPokemons")).list:[]
        setFavPokeList(list);
    }, []);

    return (
        <div>
            <FirstTable favPokeList={favPokeList} pokeController={pokeController} />
            <SecondTable favPokeList={favPokeList} pokeController={pokeController} />
        </div>
    )
}

function Home() {
    return (
      <div>
          <Header />
          <h2>Sua lista de pokemons</h2>
          <Body />
      </div>
    );
  }
  
  export default Home;