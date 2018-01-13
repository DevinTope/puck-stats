import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Division } from './division';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DivisionService {

  httpUrl: string = 'https://statsapi.web.nhl.com/api/v1/divisions';

  constructor(
    private http: HttpClient, 
    private messageService: MessageService) { }

  getDivisions(): Observable<Division[]>{
    return this.http.get<Division[]>(this.httpUrl)
    .map(div => div['divisions'])
    .pipe(
      tap(_ => this.messageService.add(`fetched division`)),
      catchError(this.handleError<Division>(`getDivisions`))
    )

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
