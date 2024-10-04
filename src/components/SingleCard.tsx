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
    h1 {
        text-align:center;
    }
    h4 {

        margin: 10px;
    }

    ul {
        margin: 10px 0; 
        padding-left: 20px; 
        list-style-type: none;
    }
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

//change this to props: Pokemon
export default function SingleCard(props: Pokemon) {
    const primaryType = props.types[0]?.type?.name || "unknown";
    return(
        <PokeCardDiv type={primaryType}>
            <h1>{props.name}</h1>
            <img src={props.image} alt={`image of ${props.name}`} />
            <h4>Base Experience: {props.base_experience}</h4>
            <h4>Moveset:</h4>
            <ul>
                {props.moves.slice(0,5).map((moveObj: Move, index: number) => (
                    <li key={index}>{moveObj.move.name}</li> 
                ))}
            </ul>
            <h4>Type(s):</h4>
            <ul>
                {props.types.map((typeObj: Type, index: number) => (
                    <li key={index}>{typeObj.type.name}</li>  
                ))}
            </ul>
        </PokeCardDiv>
    );
}
