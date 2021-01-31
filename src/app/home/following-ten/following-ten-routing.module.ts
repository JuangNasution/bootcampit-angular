import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingTenComponent } from './following-ten.component';

const routes: Routes = [{ path: '', component: FollowingTenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowingTenRoutingModule { }
