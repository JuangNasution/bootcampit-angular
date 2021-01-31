import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionTenRoutingModule } from './mention-ten-routing.module';
import { MentionTenComponent } from './mention-ten.component';


@NgModule({
  declarations: [MentionTenComponent],
  imports: [
    CommonModule,
    MentionTenRoutingModule
  ]
})
export class MentionTenModule { }
