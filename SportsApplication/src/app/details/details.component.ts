import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestDetailsService } from '../Shared/test-details.service';
import { TestDetail } from '../Shared/test-details.model';
import { Details } from '../Shared/Details.model';
import { AthleteDetailsComponent } from '../athlete-details/athlete-details.component';
import { AthleteService } from '../Shared/athlete.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Test:TestDetail;
  id:number;
  pageTitle:string;
  result:Details[];
  constructor(private route:ActivatedRoute,private service:TestDetailsService,private serv:AthleteService,private router:Router) { }

  ngOnInit() {
    this.getTest();
    this.getAthleteDetails();
  }
  getTest():void{
    this.id=+this.route.snapshot.paramMap.get('id');
    this.service.testdetailId(this.id).subscribe(tests => {
      this.Test = tests;
      this.pageTitle= this.Test.test_type;
    });
  }
  getAthleteDetails():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.serv.Athlete(id).subscribe(details=>{
      this.result=details
   })
  }
  onDelete()
  {
    const id=+this.route.snapshot.paramMap.get('id');
    this.service.DeleteTest(id).subscribe(res=>{
      this.router.navigate(['Test']);
    });
    
  }
}
