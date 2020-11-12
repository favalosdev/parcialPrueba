import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Series } from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  constructor(private service: SeriesService) { }

  selectedSeries: Series;
  selected: boolean = false;
  public seriess: Series[];

  public average: number;

  onSelected(s: Series): void {
    this.selected = true;
    this.selectedSeries = s;
  }

  ngOnInit() {
    this.getSeriess();
  }

  getSeriess(): void {
    this.service.getSeriess().subscribe(
      seriess => {

        let sum: number = 0;

        for (let series of seriess) {
          sum += series.seasons;
        }

        this.seriess = seriess;
        this.average = (sum)/(seriess.length);
      });
  }
}
