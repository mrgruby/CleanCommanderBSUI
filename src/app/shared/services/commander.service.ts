import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Platform } from 'src/app/models/Platform';
import { Router } from '@angular/router';
import { Command } from 'src/app/models/Command';

@Injectable({
    providedIn: 'root'
})
export class CommanderService {
//https://cleancommanderapi.azurewebsites.net
    readonly apiUrl = 'https://cleancommanderapi.azurewebsites.net/api/platform/';
    //readonly apiUrl = 'https://localhost:44363/api/platform/';
    readonly commandApiUrl = 'https://cleancommanderapi.azurewebsites.net/api/platform/{platformId}/command';
    //readonly commandApiUrl = 'https://localhost:44363/api/platform/{platformId}/command';
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
            .pipe(catchError(this.handleError<Platform>('getPlatformById')));
    }

    //Save a newly created event.
    //Also handles updates since the API is made so that, if the posted event exists, it will be updated.
    savePlatform(platform) {
        let httpOptions = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem("token")).set('Content-Type', 'application/json');

        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        return this.http.post<Platform>(this.apiUrl, platform,  { headers: httpOptions })
            .pipe(catchError(this.handleError<Platform>('savePlatform')));
    }

    //Update plaatform, including the list of commands. This is also used when creating a new command, since we are adding a new item to the platforms list of commands.
    updatePlatform(platform) {
        let httpOptions = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem("token")).set('Content-Type', 'application/json');

        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        return this.http.put<Platform>(this.apiUrl, platform, { headers: httpOptions })
            .pipe(catchError(this.handleError<Platform>('updatePlatform')));
    }

    saveCommand(command) {
        let httpOptions = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem("token")).set('Content-Type', 'application/json');

        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }) }
        return this.http.post<Command>(this.apiUrl + command.promptPlatformId + '/command', command, { headers: httpOptions })
            .pipe(catchError(this.handleError<Platform>('saveCommand')));
    }

    searchCommands(searchTerm: string): Observable<Command[]> {
        return this.http.get<any>(this.apiUrl + searchTerm)
            .pipe(catchError(this.handleError<Platform>('searchCommands')));;
    }

     //https://localhost:44363/api/platform/6313179F-7837-473A-A4D5-A5571B43E6A6/command/adc42c09-08c1-4d2c-9f96-2d15bb1af299
    deleteCommand(command) {
        let httpOptions = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem("token")).set('Content-Type', 'application/json');
        var url = this.apiUrl + command.promptPlatformId + '/command/' + command.commandLineId;
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }) }
        return this.http.delete(this.apiUrl + command.promptPlatformId + '/command/' + command.commandLineId, { headers: httpOptions })
            .pipe(catchError(this.handleError('deleteCommand'))).subscribe();
    }

    deletePlatform(platform) {
        let httpOptions = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem("token")).set('Content-Type', 'application/json');
        var url = this.apiUrl + platform.promptPlatformId;
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }) }
        return this.http.delete(this.apiUrl + platform.promptPlatformId, { headers: httpOptions })
            .pipe(catchError(this.handleError('deletePlatform'))).subscribe();
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            if (error.status == 404) {
                this.router.navigate(['/404']);
            }
            console.error(error);
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
