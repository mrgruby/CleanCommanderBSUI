import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommanderService {

  readonly apiUrl = 'https://localhost:44363/api/platform/';
  errorMsg: string;
  constructor(private http: HttpClient) { }

  //Get platforms list
  getPlatformsList():Observable<any[]>{
    return this.http.get<any>(this.apiUrl);
  }

  //Get platform by id
  //https://localhost:44363/api/platform/{platformId}
  getPlatformById(platformId: string):Observable<any[]>{
    return this.http.get<any>(this.apiUrl + platformId).pipe(
      catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
              this.errorMsg = `Error: ${error.error.message}`;
          } else {
              this.errorMsg = this.getServerErrorMessage(error);
          }

          return throwError(errorMsg);
      })
  );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}
  
}
