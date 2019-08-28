import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteGeneralService {

  apiUrl = 'http://localhost:8081/tattooshop';

  constructor(private httpClient: HttpClient) { }

  postAny(apiEndpoint: string, postData: any): Observable<any[]>{
    return this.httpClient.post<any[]>(this.apiUrl + apiEndpoint, postData);
  }

  /*postAny(apiEndpoint: string, postData: any) {
    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post<any[]>(this.apiUrl + apiEndpoint, {
      fechaInicial: '019-08-28T12:57:04.704Z',
      duracion: 3
    }, options);
  }*/

}
