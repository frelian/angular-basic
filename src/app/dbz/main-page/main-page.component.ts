import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../servicess/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 9500
    }
  ];

  new: Character = {
    name : '',
    power: 0
  }

  addNewCharacter( argument: Character ) {
    this.characters.push( argument )
  }

  /*
    Forma corta de definir propiedades de la clase se llamaÑ
        Inyeccion de dependencias
    Donde, private seguido del nombre de la propiedad 
    Luego ":" y el tipo de dato, que seria DbzService

  */
  constructor ( private dbzService: DbzService ) {
    
  }

}
