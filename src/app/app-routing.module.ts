import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'example',
    pathMatch: 'full'
  },
  {
    path: 'example',
    loadChildren: () => import('./home/example/example.module').then(m => m.ExampleModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./home/user-details/user-details.module').then(m => m.UserDetailsModule)
  },
  {
    path: 'pinned-tweet',
    loadChildren: () => import('./home/pinned-tweet/pinned-tweet.module').then(m => m.PinnedTweetModule)
  },
  {
    path: 'last-ten-tweets',
    loadChildren: () => import('./home/last-ten-tweets/last-ten-tweets.module').then(m => m.LastTenTweetsModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./home/timeline/timeline.module').then(m => m.TimelineModule)
  },
  {
    path: 'following-ten',
    loadChildren: () => import('./home/following-ten/following-ten.module').then(m => m.FollowingTenModule)
  },
  {
    path: 'follower-list',
    loadChildren: () => import('./home/follower-list/follower-list.module').then(m => m.FollowerListModule)
  },
  {
    path: 'mention-ten',
    loadChildren: () => import('./home/mention-ten/mention-ten.module').then(m => m.MentionTenModule)
  },
  {
    path: 'mention-list',
    loadChildren: () => import('./home/mention-list/mention-list.module').then(m => m.MentionListModule)
  },
  {
    path: 'search-ten',
    loadChildren: () => import('./home/search-ten/search-ten.module').then(m => m.SearchTenModule)
  },
  {
    path: 'search-list',
    loadChildren: () => import('./home/search-list/search-list.module').then(m => m.SearchListModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
