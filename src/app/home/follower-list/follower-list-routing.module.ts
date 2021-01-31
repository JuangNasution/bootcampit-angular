import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerListComponent } from './follower-list.component';

const routes: Routes = [{ path: '', component: FollowerListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowerListRoutingModule { }
