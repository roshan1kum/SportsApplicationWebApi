import { Component, OnInit } from '@angular/core';
import { Details } from '../../Shared/Details.module';
import { AthleteService } from '../athlete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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

