import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionListComponent } from './mention-list.component';

const routes: Routes = [{ path: '', component: MentionListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentionListRoutingModule { }
