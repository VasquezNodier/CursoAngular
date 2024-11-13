
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent,
  ],
  exports: [
    CounterComponent
  ],
  providers: [],
  bootstrap: []
})
export class CounterModule { }
