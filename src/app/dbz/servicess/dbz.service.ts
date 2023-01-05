import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable() // con esta directiva digo que la clase se va a poder inyectar
export class DbzService {

    private _characters: Character[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 9500
        }
    ];

    // retorno un arreglo de Character[]
    get characters(): Character[] {
        return [...this._characters];
    }

    constructor() {
        console.log('Initialized service')
    }
}
