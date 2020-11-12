import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesListComponent, SeriesDetailComponent],
  exports: [SeriesListComponent]
})
export class SeriesModule { }
