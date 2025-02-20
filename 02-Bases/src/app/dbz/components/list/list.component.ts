import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10 },
  ]

  // Evento a emitir
  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  // Función para emitir el evento al padre
  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log({id});
    this.onDeleteId.emit(id);
  }



}
