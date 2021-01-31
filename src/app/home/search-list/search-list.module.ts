import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchListRoutingModule } from './search-list-routing.module';
import { SearchListComponent } from './search-list.component';


@NgModule({
  declarations: [SearchListComponent],
  imports: [
    CommonModule,
    SearchListRoutingModule
  ]
})
export class SearchListModule { }
