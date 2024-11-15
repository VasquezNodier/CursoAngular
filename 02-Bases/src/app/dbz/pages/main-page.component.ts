import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 600 },
  ];

  onNewCharacter(character: Character): void {
    console.log('Main Page');
    this.characters.push(character);
    console.log("Elementos totales: ",this.characters);
  }

  // Función para recibir el evento del hijo
  onDeleteCharacter(index: number): void {
    this.characters.splice(index,1);
  }

}
