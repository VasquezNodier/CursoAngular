import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  ngOnInit(): void {
    if(!this.url)throw new Error('URL property is required.');
  }

  @Input()
  public url !: string;

  @Input()
  public alt: string = "Image";

  public hasLoaded: boolean = false;

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
