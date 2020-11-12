import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Series } from '../series';


@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  @Input() seriesDetail: Series;

  constructor() { }

  ngOnInit() {
    console.log(this.seriesDetail.id);
  }

}
