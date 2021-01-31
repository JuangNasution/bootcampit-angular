import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTenRoutingModule } from './search-ten-routing.module';
import { SearchTenComponent } from './search-ten.component';


@NgModule({
  declarations: [SearchTenComponent],
  imports: [
    CommonModule,
    SearchTenRoutingModule
  ]
})
export class SearchTenModule { }
