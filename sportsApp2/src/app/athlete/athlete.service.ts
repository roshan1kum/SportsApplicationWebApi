import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../Shared/Details.module';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  readonly rootUrl= "http://localhost:50948/api";
  constructor(private http : HttpClient) { }

  Athlete(id:number):Observable<Details[]>{
    return this.http.get<Details[]>(this.rootUrl + '/Details/GetDetails/'+id)
  }
  AthleteDetails(id:number):Observable<Details>{
    return this.http.get<Details>(this.rootUrl + '/Details/Results/'+id)
  }
  PostAthlete(Athlete:Details,id:number){
    return this.http.post(this.rootUrl + '/Details/'+id,Athlete)
  }
  DeleteAthlete(id:Number)
  {
    return this.http.delete(this.rootUrl + '/Details/'+id)
  }
  PutAthlete(Athlete:Details,id:number){
    return this.http.put<Details>(this.rootUrl + '/Details/'+id,Athlete)
  }
}