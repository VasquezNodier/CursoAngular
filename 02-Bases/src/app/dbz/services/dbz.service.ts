import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {id:uuid(),  name: 'Krillin', power: 1000 },
    {id:uuid(),  name: 'Goku', power: 9500 },
    {id:uuid(),  name: 'Vegeta', power: 600 },
  ];

  onNewCharacter(character: Character): void {
    console.log('Main Page');
    // const newCharacter: Character = { id: uuid(), name: character.name, power: character.power };
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
    console.log("Elementos totales: ",this.characters);
  }

  // Función para recibir el evento del hijo
  onDeleteCharacter(index: number): void {
    this.characters.splice(index,1);
  }

  deleteCharacterById(id: string): void {
    console.log("Servicio - Eliminando: ",id);
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
