import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  erasedHero: string = '';

  deleteHero(): void {

    this.erasedHero = this.heroes.shift() || '';
    // console.log(heroDeleted + ', has been deleted...')
  }
}
