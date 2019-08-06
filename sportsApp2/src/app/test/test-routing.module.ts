import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestListComponent } from './test-list/test-list.component';
import { DetailsComponent } from '../athlete/details/details.component';

const routes: Routes = [
  {
    path:'',
    component:TestListComponent
  },{
    path:'Create',
    component:CreateTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
