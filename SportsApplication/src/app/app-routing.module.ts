import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestsComponent } from './tests/tests.component';
import { DetailsComponent } from './details/details.component';
import { AthleteDetailsComponent } from './athlete-details/athlete-details.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { EditAthleteComponent } from './edit-athlete/edit-athlete.component';




const routes: Routes = [
  {path: '',component:TestsComponent ,pathMatch : "full"},
  {path: 'Test', component: TestsComponent},
  {path: 'Details/:id', component: DetailsComponent},
  {path: 'Create',component: CreateTestComponent},
  {path: 'Athlete/:id',component:AthleteDetailsComponent},
  {path: 'AddAthlete/:id',component:AddAthleteComponent},
  {path:'Edit/:id',component:EditAthleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
