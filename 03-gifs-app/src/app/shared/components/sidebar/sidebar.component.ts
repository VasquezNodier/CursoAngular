import { Component } from '@angular/core';
import { GifService } from '../../../services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor (private gifService: GifService) {  }

  get tagsHistory() {
    return this.gifService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifService.searchTag(tag);
  }


}
