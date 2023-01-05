import { Injectable } from "@angular/core";

@Injectable() // con esta directiva digo que la clase se va a poder inyectar
export class DbzService {

    constructor() {
        console.log('Initialized service')
    }
}
