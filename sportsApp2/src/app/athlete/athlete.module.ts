import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthleteRoutingModule } from './athlete-routing.module';
import { DetailsComponent } from './details/details.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAthleteComponent } from './edit-athlete/edit-athlete.component';


@NgModule({
  declarations: [DetailsComponent, AddAthleteComponent, EditAthleteComponent],
  imports: [
    CommonModule,
    AthleteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AthleteModule { }
