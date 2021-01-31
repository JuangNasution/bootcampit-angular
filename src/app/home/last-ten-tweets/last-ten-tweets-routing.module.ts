import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastTenTweetsComponent } from './last-ten-tweets.component';

const routes: Routes = [{ path: '', component: LastTenTweetsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastTenTweetsRoutingModule { }
