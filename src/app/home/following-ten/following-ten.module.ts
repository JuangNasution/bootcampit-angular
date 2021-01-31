import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowingTenRoutingModule } from './following-ten-routing.module';
import { FollowingTenComponent } from './following-ten.component';


@NgModule({
  declarations: [FollowingTenComponent],
  imports: [
    CommonModule,
    FollowingTenRoutingModule
  ]
})
export class FollowingTenModule { }
