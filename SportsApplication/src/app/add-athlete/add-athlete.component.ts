import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Details } from '../Shared/Details.model';
import { TestDetailsService } from '../Shared/test-details.service';
import { AthleteService } from '../Shared/athlete.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-athlete',
  templateUrl: './add-athlete.component.html',
  styleUrls: ['./add-athlete.component.css']
})
export class AddAthleteComponent implements OnInit {
  detail: Details;
  d:Details;
  AthleteDetails: Details[];

  constructor(private service: AthleteService, private route: ActivatedRoute, private router: Router) { 
    this.d = new Details();
  }
  profileForm = new FormGroup({
    Name: new FormControl(''),
    Distance: new FormControl(''),
  });
  ngOnInit() {

  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.detail = Object.assign({}, this.profileForm.value);
    this.service.PostAthlete(this.detail, id).subscribe(res=>{
      this.router.navigate(['/Details', id]);
    });
    

  }

}

