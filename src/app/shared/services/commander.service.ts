import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanderService {

  readonly apiUrl = 'https://localhost:44363/api/platform/';
  constructor(private http: HttpClient) { }

  //Get platforms list
  getPlatformsList():Observable<any[]>{
    return this.http.get<any>(this.apiUrl);
  }

  //Get platform by id
  //https://localhost:44363/api/platform/{platformId}
  getPlatformById(platformId: string):Observable<any[]>{
    return this.http.get<any>(this.apiUrl + platformId)
  }
  
}
