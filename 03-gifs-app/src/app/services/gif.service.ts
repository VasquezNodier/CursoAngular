import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor( private http: HttpClient ) { }

  private _tagsHistory: string[] = [];
  private apiKey : string = "udYxgwGbwPze9KsfK5Esdx2XZbXcydWt";
  private serviceUrl : string = "https://api.giphy.com/v1/gifs/";

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag : string ) : void {

    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams().
      set('api_key', this.apiKey).
      set('limit', '20').
      set('q', tag);

    this.http.get(`${this.serviceUrl}search?${params}`)
      .subscribe((res) => console.log(res));
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
