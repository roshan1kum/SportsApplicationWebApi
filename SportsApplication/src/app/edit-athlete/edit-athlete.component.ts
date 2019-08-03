import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Details } from '../Shared/Details.model';
import { FormControl, FormGroup } from '@angular/forms';
import { AthleteService } from '../Shared/athlete.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-athlete',
  templateUrl: './edit-athlete.component.html',
  styleUrls: ['./edit-athlete.component.css']
})
export class EditAthleteComponent implements OnInit {
  id:number;

  detail:Details = new Details();
  constructor(private route:ActivatedRoute,private service:AthleteService,private router:Router,private location:Location) { }
  
  profileForm = new FormGroup({
    Name: new FormControl(''),
    Distance: new FormControl(''),
  });

  ngOnInit() {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      const ID = +params.get('id');
      if (ID) {
        console.log(ID);
        this.getAthleteDetails(ID);
      }
    });
  }
  getAthleteDetails(ID)
  {
    this.service.AthleteDetails(ID).subscribe(response => {
           this.detail = response;
           this.edit(response);
           
  });
}
  edit(detail: Details) {
      console.log(detail.name)
      this.profileForm.patchValue({
        Name:detail.name,
        Distance:detail.distance
      });
    }
  onSubmit()
  {
   
    this.detail.name = this.profileForm.value.Name;
    this.detail.distance = this.profileForm.value.Distance;
    this.service.PutAthlete(this.detail,this.id).subscribe(res=>{
      this.router.navigate(['/Details',this.detail.testId]);
    });
    
  }
  onDelete()
  {
    //alert("jhef");
    const id=+this.route.snapshot.paramMap.get('id');
    this.service.DeleteAthlete(id).subscribe();
  }
}
