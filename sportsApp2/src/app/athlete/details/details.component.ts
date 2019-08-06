import { Component, OnInit } from '@angular/core';
import { Test } from '../../Shared/Test.model';
import { Details } from '../../Shared/Details.module';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../test/test.service';
import { AthleteService } from '../athlete.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Test:Test;
  id:number;
  pageTitle:string;
  result:Details[];
  constructor(private route:ActivatedRoute,private service:TestService,private serv:AthleteService,private router:Router) { 
    this.getAthleteDetails();
  }

  ngOnInit() {
     this.getTest();
     this.getAthleteDetails();
  }
  getTest():void{
    this.id=+this.route.snapshot.paramMap.get('id');
    this.service.testdetailId(this.id).subscribe(tests => {
      this.Test = tests;
      this.pageTitle= this.Test.test_type+" "+this.Test.date;
     
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
    this.service.DeleteTest(id).subscribe(
       res=>{
      this.router.navigate(['']);
     }
  );
    
  }
  Back()
  {
    this.router.navigate(['']);
  }
  
}