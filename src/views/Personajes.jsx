import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Personajes = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState("");
  const navigate = useNavigate();

  const obtenerPokemon = async () => {
    try {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
      const res = await fetch(apiUrl);
      if(!res.ok){
        throw new Error('Error al obtener los datos')
      }
      const { results } = await res.json();
      setPokemon(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPokemon();
  }, []);

  const cambioSelect = ({ target: { value } }) => setSelectPokemon(value);

  const irAlPokemon = () => {
    if (!selectPokemon) {
      alert("Debes selecionar un pokemon");
    } else {
      navigate(`/personajes/${selectPokemon}`);
    }
  };

  return (
    <div className="personajes">
      <h1>Selecciona un Pokemon</h1>
      <select
        onChange={(value) => cambioSelect(value)}
        className="form-select"
        name=""
        id=""
      >
        <option> Pokemones </option>
        {pokemon.map((poke) => (
          <option value={poke.name} key={poke.name}>
            {poke.name}
          </option>
        ))}
      </select>
      <button type="button" onClick={irAlPokemon} className="btn btn-dark">
        Ver Detalle
      </button>
    </div>
  );
};
export default Personajes;
