import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestListComponent } from './test-list/test-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateTestComponent, TestListComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
