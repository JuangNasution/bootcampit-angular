import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinnedTweetRoutingModule } from './pinned-tweet-routing.module';
import { PinnedTweetComponent } from './pinned-tweet.component';


@NgModule({
  declarations: [PinnedTweetComponent],
  imports: [
    CommonModule,
    PinnedTweetRoutingModule
  ]
})
export class PinnedTweetModule { }
