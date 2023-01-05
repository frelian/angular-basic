import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../servicess/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  new: Character = {
    name : '',
    power: 0
  }

  /* getter
  get characters(): Character[] {
    return this.dbzService.characters;
  }
  */

  constructor () {}

}
