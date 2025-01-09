import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchRespose } from '../gifs/interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor( private http: HttpClient ) { }

  public gifList : Gif[] = [];

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

    this.http.get<SearchRespose>(`${this.serviceUrl}search?${params}`)
      .subscribe((res) => {
        this.gifList = res.data;
        console.log(this.gifList);
      });
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
