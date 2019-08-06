import { Injectable } from '@angular/core';
import { Test } from '../Shared/Test.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  Test: Test;
  readonly rootUrl= "http://localhost:50948/api";
  constructor(private http : HttpClient) { }

  testdetail() : Observable<Test[]>{
     return this.http.get<Test[]>(this.rootUrl + '/tests')
  }
  testdetailId(id:number) : Observable<Test>{
    return this.http.get<Test>(this.rootUrl + '/tests/'+id)
 }

 PostTest(Tests:Test){
   return this.http.post(this.rootUrl+ '/tests',Tests);
 }
 DeleteTest(id:number){
   return this.http.delete<Test>(this.rootUrl+ '/tests/'+id);
 }


 }


