import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }

  private getUrlReturn(url:string):Observable<string[]>{
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res:Response){
    let body = res.json();
    return JSON.parse(body) || {};
  }

}
