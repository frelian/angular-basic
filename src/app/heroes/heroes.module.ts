import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],

    // Son cosas que quiero que sean visibles fuera del modulo
    exports: [
        ListComponent
    ],

    // Modulos requeridos para el desarrollo
    imports: [
        CommonModule // incluye el uso de las directivas como ngIf, ngFor
    ]
})
export class HeroesModule {

}