import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastTenTweetsRoutingModule } from './last-ten-tweets-routing.module';
import { LastTenTweetsComponent } from './last-ten-tweets.component';


@NgModule({
  declarations: [LastTenTweetsComponent],
  imports: [
    CommonModule,
    LastTenTweetsRoutingModule
  ]
})
export class LastTenTweetsModule { }
