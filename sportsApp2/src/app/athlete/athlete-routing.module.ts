import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { EditAthleteComponent } from './edit-athlete/edit-athlete.component';


const routes: Routes = [{
  path:'',component:DetailsComponent
},
{
path:'AddAthlete/:id',component:AddAthleteComponent
},
{
  path:'Edit/:id',component:EditAthleteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteRoutingModule { }
