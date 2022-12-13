import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {

    name: string = 'Ironman';
    age : number = 36;

    get capitalizedName(): string {
        return this.name.toLocaleUpperCase();
    }

    getName(): string {
        return `${ this.name } - ${ this.age }`;
    }

    changeName(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        console.log('hey..')
        this.age = 28;
    }
}