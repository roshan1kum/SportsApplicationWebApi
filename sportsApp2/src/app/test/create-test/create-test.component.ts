import { Component, OnInit } from '@angular/core';
import { Test } from '../../Shared/Test.model';
import { TestService } from '../test.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  Test:Test;
  TestType=["Cooper","sprint"];

  constructor(private service:TestService,private router:Router) { }

  profileForm = new FormGroup({
    Date: new FormControl(''),
    test_type: new FormControl(''),
  });

  ngOnInit() {
    
  }

  onSubmit()
  {
   this.Test = Object.assign({},this.profileForm.value);
   this.service.PostTest(this.Test).subscribe(
      err=>{
        console.log(err);
      })
      this.router.navigate([''])
  }
}
