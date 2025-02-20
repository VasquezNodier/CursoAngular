import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit {

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe( value => {
      // console.log('debouncer:::', value);
      this.onDebounce.emit(value);
    })
  }

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = 'Search...';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress( searchTerm: string ): void {
    this.debouncer.next(searchTerm);
  }
}
