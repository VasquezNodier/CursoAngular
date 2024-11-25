import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor() { }

  private _tagsHistory: string[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag : string ) :void {

    if (tag.length === 0) return;

    this.organizeHistory(tag);

    // this._tagsHistory.unshift(tag);
    console.log(this._tagsHistory);
  }

  organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory.splice(10);
  }

}
