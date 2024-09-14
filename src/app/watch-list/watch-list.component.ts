import { Component } from '@angular/core';
import { WatchListService } from '../watch-list.service';
import { WatchListCardComponent } from "../watch-list-card/watch-list-card.component";
import { NoWathListComponent } from "../no-wath-list/no-wath-list.component";

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [WatchListCardComponent, NoWathListComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent {
  watchList: any[] = [];
  constructor(private watchListService: WatchListService) { }
  ngOnInit() {
    this.watchList = this.watchListService.getWatchList();
  }
}
