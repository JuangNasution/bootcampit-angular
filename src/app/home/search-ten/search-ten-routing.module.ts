import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTenComponent } from './search-ten.component';

const routes: Routes = [{ path: '', component: SearchTenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchTenRoutingModule { }
