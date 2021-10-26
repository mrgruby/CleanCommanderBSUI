import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let loginInfo = { username: userName, password: password };

    //tap() lets you tap into the data that is returned by an observable http call. 
    //We want to get the returned login info to set the current user. tap() doesn't change data, it only reads. Map() will manipulate data.
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        //this.currentUser = <IUser>data['user'];//data['user'] is waht is returned from the server.
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }
}
