import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  readonly apiUrl = 'https://localhost:44363/api/authentication/';

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let loginInfo = { username: userName, password: password };

    //tap() lets you tap into the data that is returned by an observable http call. 
    //We want to get the returned login info to set the current user. tap() doesn't change data, it only reads. Map() will manipulate data.
    return this.http.post(this.apiUrl + 'authenticate', loginInfo, options)
      .pipe(tap(data => {
        var tempUser = new IUser;
        tempUser.userName = data['userName'];
        this.currentUser = tempUser;//data['user'] is what is returned from the server.
        localStorage.setItem("userName", this.currentUser.userName);
        // localStorage.setItem("token", data['Token']);
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  
  isAuthenticated() {
    const token: string = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return !!this.currentUser;//Returns true if the current user object is set. !! converts to boolean
    }
  }

  checkAuthenticationStatus() {
    //Send the token to he server to check if it is still valid.
    const token: string = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      var tempUser = new IUser;
      tempUser.userName = localStorage.getItem("userName");
      this.currentUser = tempUser;
    }
    else{
      this.currentUser = null;
    }
    //This could also be done in a subscribe. Using tap() instead, gives the user the option to subscribe to the returned data where
    //checkAuthenticationStatus is called, and use it for something there. 
    // this.http.get('/api/currentIdentity')
    //   .pipe(tap(data => {
    //     if (data instanceof Object) {
    //       this.currentUser = <User>data;
    //     }
    //   })).subscribe();
      //We could also write .subscribe(); here, remove the return, and then write .subscribe(); over in app.component like, this.auth.checkAuthenticationStatus().subscribe();
  }
}
