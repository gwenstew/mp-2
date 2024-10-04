import { useEffect, useState } from 'react'
import styled from "styled-components";
import {Pokemon} from "./interfaces/Pokemon.ts";
import PokeCard from './components/PokeCard.tsx';

const ParentDiv=styled.div`
    width:80vw;
    margin:auto;
`;

function App() {
  const [data, setPokeData] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        //fetch raw pokemon data from PokeAPI
        const rawData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        const { results } = await rawData.json();

        //map
        const pokeDetails = results.map((pokemon: {url: string}) => 
          fetch(pokemon.url).then(res => res.json()));
        const pokeData = await Promise.all(pokeDetails);
        
        setPokeData(pokeData);
      } catch (error) {
          console.error("Error fetching Pokemon data: ", error);
      }
    }
    fetchData();
  } );

  return (
    <ParentDiv>
      <PokeCard data={data}/>
    </ParentDiv>
  );
}

export default App;
