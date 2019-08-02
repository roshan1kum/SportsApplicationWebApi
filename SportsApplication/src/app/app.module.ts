import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetailsComponent } from './details/details.component';
import { TestDetailsService } from './Shared/test-details.service';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestsComponent } from './tests/tests.component';
import { AthleteDetailsComponent } from './athlete-details/athlete-details.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { EditAthleteComponent } from './edit-athlete/edit-athlete.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    DetailsComponent,
    CreateTestComponent,
    AthleteDetailsComponent,
    AddAthleteComponent,
    EditAthleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TestDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
