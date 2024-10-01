interface Move {
    name:string;
}

interface Type {
    name:string
}

export interface Pokemon {
    id:number;
    name:string;
    base_experience:number;
    image:string;
    sprites: {
        front_default: string;
    };


}
