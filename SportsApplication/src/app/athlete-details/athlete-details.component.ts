import { Component, OnInit } from '@angular/core';
import { TestDetailsService } from '../Shared/test-details.service';
import { AthleteService } from '../Shared/athlete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from '../Shared/Details.model';

@Component({
  selector: 'app-athlete-details',
  templateUrl: './athlete-details.component.html',
  styleUrls: ['./athlete-details.component.css']
})
export class AthleteDetailsComponent implements OnInit {
  result:Details;
  id:number;

  constructor(private service:AthleteService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    debugger;
    this.getAthleteDetails();
  }
  getAthleteDetails():void{
    this.id=+this.route.snapshot.paramMap.get('id');
    this.service.AthleteDetails(this.id).subscribe(details=>{
      this.result=details
    console.log(this.result)
  })
  }
  onDelete(){
    const id=+this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.DeleteAthlete(id).subscribe();
    //this.router.navigate(['Details/:this.id']);
  }
}
