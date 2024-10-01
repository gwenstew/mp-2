import styled from "styled-components";
import {Pokemon} from "../interfaces/Pokemon.ts";

//Building UI of individual Pokemon Cards


const PokeCardDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    
    text-align: center;
`;

export default function SingleCard({name, base_experience, image}: Pokemon) {
    return(
        <PokeCardDiv>
            <h1>{name}</h1>
            <img src={image} alt={`image of ${name}`} />
            <p>Base Experience: {base_experience}</p>
            <p>Moveset: </p>
            <p>Type: </p>
        </PokeCardDiv>
    );
}
