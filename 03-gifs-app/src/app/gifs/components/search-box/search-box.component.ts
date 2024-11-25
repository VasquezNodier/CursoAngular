import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifService) {  }

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    console.log({ newTag });
    this.tagInput.nativeElement.value = '';
  }

}
