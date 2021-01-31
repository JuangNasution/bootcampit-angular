import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionListRoutingModule } from './mention-list-routing.module';
import { MentionListComponent } from './mention-list.component';


@NgModule({
  declarations: [MentionListComponent],
  imports: [
    CommonModule,
    MentionListRoutingModule
  ]
})
export class MentionListModule { }
