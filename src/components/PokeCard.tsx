import styled from "styled-components";
import {Pokemon} from "../interfaces/Pokemon.ts";
import SingleCard from "./SingleCard.tsx";

//Retrieves data for pokemon cards

const AllPokeDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;



export default function PokeCard(props: {data:Pokemon[]}) {
    return (
        <AllPokeDiv>
            {props.data.map((poke: Pokemon) => (
                <SingleCard
                key={poke.id}
                id={poke.id}
                name={poke.name}
                sprites={poke.sprites}
                image={poke.sprites.front_default}
                base_experience={poke.base_experience}
                moves={poke.moves}
                types={poke.types}
                />
            ))}
        </AllPokeDiv>
    );
}
