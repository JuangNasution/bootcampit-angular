import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowerListRoutingModule } from './follower-list-routing.module';
import { FollowerListComponent } from './follower-list.component';


@NgModule({
  declarations: [FollowerListComponent],
  imports: [
    CommonModule,
    FollowerListRoutingModule
  ]
})
export class FollowerListModule { }
