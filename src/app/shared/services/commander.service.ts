import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Platform } from 'src/app/models/Platform';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CommanderService {

    readonly apiUrl = 'https://localhost:44363/api/platform/';
    errorMsg: string;
    constructor(private http: HttpClient, private router: Router) { }

    //Get platforms list
    getPlatformsList(): Observable<Platform[]> {
        return this.http.get<Platform[]>(this.apiUrl)
            .pipe(catchError(this.handleError<Platform[]>('getPlatformsList', [])));
    }

    //Get platform by id
    //https://localhost:44363/api/platform/{platformId}
    getPlatformById(platformId: string): Observable<Platform> {
        return this.http.get<any>(this.apiUrl + platformId)
            .pipe(catchError(this.handleError<Platform>('getPlatformById')));;
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            if (error.status == 404) {
                this.router.navigate(['/404']);
            }
            //console.error(error);
            return of(result as T);
        }
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
