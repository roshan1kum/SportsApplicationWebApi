import { Injectable } from '@angular/core';
import { TestDetail } from './test-details.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from './Details.model';

@Injectable({
  providedIn: 'root'
})
export class TestDetailsService {
  Test: TestDetail;
  readonly rootUrl= "http://localhost:50948/api";
  constructor(private http : HttpClient) { }

  testdetail() : Observable<TestDetail[]>{
     return this.http.get<TestDetail[]>(this.rootUrl + '/tests')
  }
  testdetailId(id:number) : Observable<TestDetail>{
    return this.http.get<TestDetail>(this.rootUrl + '/tests/'+id)
 }

 PostTest(Tests:TestDetail){
   return this.http.post(this.rootUrl+ '/tests',Tests);
 }
 DeleteTest(id:number){
   return this.http.delete<TestDetail>(this.rootUrl+ '/tests/'+id);
 }


 }

