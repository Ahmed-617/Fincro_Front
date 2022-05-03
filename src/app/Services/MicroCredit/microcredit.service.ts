import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicrocreditService {
  url="http://localhost:8081/SpringMVC/"
  constructor(private http : HttpClient) { }

  getMicroCredits():Observable<any>{
    this.url = this.url + "getAllCredits";
    return this.http.get(this.url);
  }

  addMicroCredit(c:any/*,id:any*/){
    this.url = this.url + "addCredit/1";//${id}
    return this.http.post(this.url,c);
  }

  getMicroCreditById(id:any){
    this.url = this.url + "getCredit";
    return this.http.get(this.url,id);
  }

  simulation(amount:any,type:any,period:any){
    this.url = this.url + "simulator";
    const params = new HttpParams()
   .set('amount', amount)
   .set('period', period)
   .set('typePeriod',type);
    return this.http.get(this.url, {params});
  }

}

