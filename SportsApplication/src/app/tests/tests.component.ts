import { Component, OnInit } from '@angular/core';
import { TestDetailsService } from '../Shared/test-details.service';
import { TestDetail } from '../Shared/test-details.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  Tests : TestDetail[];
  constructor(private service : TestDetailsService) { }
  
  ngOnInit() {
    this.getTests();
    
  }

  getTests(): void{
    this.service.testdetail().subscribe(tests => this.Tests = tests)
    
  }


}
