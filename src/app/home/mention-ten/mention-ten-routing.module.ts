import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionTenComponent } from './mention-ten.component';

const routes: Routes = [{ path: '', component: MentionTenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentionTenRoutingModule { }
