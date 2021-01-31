import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {}
