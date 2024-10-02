import styled from "styled-components";
import {Pokemon, Move, Type} from "../interfaces/Pokemon.ts";

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

export default function SingleCard({name, base_experience, image, moves, types}: Pokemon) {
    return(
        <PokeCardDiv>
            <h1>{name}</h1>
            <img src={image} alt={`image of ${name}`} />
            <p>Base Experience: {base_experience}</p>
            <p>Moveset:</p>
            <ul>
                {moves.slice(0,5).map((moveObj: Move, index: number) => (
                    <li key={index}>{moveObj.move.name}</li> 
                ))}
            </ul>
            <p>Type(s)</p>
            <ul>
                {types.map((typeObj: Type, index: number) => (
                    <li key={index}>{typeObj.type.name}</li>  // Accessing only the type name
                ))}
            </ul>
        </PokeCardDiv>
    );
}
