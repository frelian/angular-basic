import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input() new: Character = {
    name : '',
    power: 0,
  }

  rename( myEvent: any) {
    console.log( myEvent.target )
  }

  // Como se va a emitir un personaje entonces por eso pongo
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add() {

    // trim() remove spaces
    if ( this.new.name.trim().length === 0 ) {
      return;
    }

    this.onNewCharacter.emit( this.new );

    // clear input
    this.new = {
      name : '',
      power: 0
    }
  }
}
