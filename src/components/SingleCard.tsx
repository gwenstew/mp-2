import styled from "styled-components";
import {Pokemon, Move, Type} from "../interfaces/Pokemon.ts";

//Building UI of individual Pokemon Cards


const PokeCardDiv=styled.div<{type:string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border-radius: 25px;

    background-color: ${(props) =>
        props.type == "fire" ? "#FF7518":
        props.type == "water" ? "#ADD8E6":
        props.type == "grass" ? "#2E8B57":
        props.type == "poison" ? "#9F2B68":
        props.type == "dark" ? "#915F6D":
        props.type == "electric" ? "#FFD700":
        props.type == "ghost" ? "#BDB5D5":
        props.type == "ground" ? "#CC7722":
        props.type == "bug" ? "#B4C424":
        props.type == "fighting" ? "#DC143C":
        props.type == "rock" ? "#FFD580":
        props.type == "psychic" ? "#DA70D6":
        props.type == "flying" ? "#7393B3":
        props.type == "fairy" ? "#F8C8DC":
        props.type == "ice" ? "#CCCCFF":
        props.type == "dragon" ? "#9FE2BF":
        "#B2BEB5"
    }
    
    
`;

export default function SingleCard({name, base_experience, image, moves, types}: Pokemon) {
    const primaryType = types[0]?.type?.name || "unknown";
    return(
        <PokeCardDiv type={primaryType}>
            <h1>{name}</h1>
            <img src={image} alt={`image of ${name}`} />
            <p>Base Experience: {base_experience}</p>
            <p>Moveset:</p>
            <ul>
                {moves.slice(0,5).map((moveObj: Move, index: number) => (
                    <li key={index}>{moveObj.move.name}</li> 
                ))}
            </ul>
            <p>Type(s):</p>
            <ul>
                {types.map((typeObj: Type, index: number) => (
                    <li key={index}>{typeObj.type.name}</li>  // Accessing only the type name
                ))}
            </ul>
        </PokeCardDiv>
    );
}
