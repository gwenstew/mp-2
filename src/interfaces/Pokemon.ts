export interface Move {
    move: {
        name:string;
    }
}

export interface Type {
    type: {
        name:string;
    }
}

export interface Pokemon {
    key:number;
    id:number;
    name:string;
    base_experience:number;
    image:string;
    sprites: {
        front_default: string;
    };
    moves:Move[]
    types:Type[]

}
