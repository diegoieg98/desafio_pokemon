import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalles = () => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  const obtenerUrl = async () => {
    try {
      const pokemonApi = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await fetch(pokemonApi);
      if (!res.ok) {
        throw new Error("Error al obtener los datos");
      } else {
        const data = await res.json();
        setPokemon(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerUrl();
  }, [name]);

  return (
    <div className="detalle">
      <div className="card">
        {pokemon.sprites && (
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt=""
            width="300px"
            height="300px"
          />
        )}
        <div>
          <h1>{pokemon.name}</h1>
          <ul>
            {pokemon.stats &&
              pokemon.stats.map((el, index) => (
                <li key={index}>
                  {el.stat.name}: {el.base_stat}
                </li>
              ))}
          </ul>
          {pokemon.types &&
            pokemon.types.map((el, index) => (
              <p key={index} className="type">
                {el.type.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detalles;
