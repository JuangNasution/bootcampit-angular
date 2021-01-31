import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinnedTweetComponent } from './pinned-tweet.component';

const routes: Routes = [{ path: '', component: PinnedTweetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinnedTweetRoutingModule { }
