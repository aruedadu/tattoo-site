import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteGeneralService {

  apiUrl = 'http://localhost:8081/tattooshop';

  constructor(private httpClient: HttpClient) { }

  postAny(apiEndpoint: string, postData: any): Observable<any[]>{
    return this.httpClient.post<any[]>(this.apiUrl + apiEndpoint, postData);
  }

  // Posible metodo para la generalizacion del consumo post
  /*postAny2(apiEndpoint: string, postData: any): any[] {
    let response: any[];
    this.httpClient.post<any[]>(this.apiUrl + apiEndpoint, postData)
      .subscribe(
        (data: any[]) => {
          response = data;
        },
        (error) => {
          console.log('error capturado');
          return throwError(error.error.message || error.message || 'Error interno de servidor');
        }
      );
    return response;
  }*/

}
