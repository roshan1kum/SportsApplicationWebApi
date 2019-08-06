import { Component, OnInit } from '@angular/core';
import { Test } from '../../Shared/Test.model';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  Tests : Test[];
  constructor(private service : TestService,private router:Router) { 
    this.getTests();
  }
  ngOnInit() {
    this.getTests();
  }
  getTests(): void{
    this.service.testdetail().subscribe(tests => this.Tests = tests) 
  }
  NavigateToDetails(testID:number)
  {
    //console.log(testID);
    this.router.navigate(['./Details',testID]);
  }
}
