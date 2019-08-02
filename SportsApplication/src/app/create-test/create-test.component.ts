import { Component, OnInit } from '@angular/core';
import { TestDetailsService } from '../Shared/test-details.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { TestDetail } from '../Shared/test-details.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  Test:TestDetail;
  TestType=["Cooper","sprint"];

  constructor(private service:TestDetailsService,private router:Router) { }

  profileForm = new FormGroup({
    Date: new FormControl(''),
    test_type: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit()
  {
  //console.log(this.profileForm.value)
   this.Test = Object.assign({},this.profileForm.value);
   this.service.PostTest(this.Test).subscribe(
      err=>{
        console.log(err);
      })
      this.router.navigate(['Test'])
  }
}
