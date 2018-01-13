import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, filter, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Player } from './player';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlayerService {

  httpUrl = 'https://statsapi.web.nhl.com/api/v1/teams';

  constructor(
    private http: HttpClient, 
    private messageService: MessageService) { }

  getRoster(id: number): Observable<Player[]>{
    return this.http.get<Player[]>(this.httpUrl + `/${id}/roster`)
    .map(roster => roster['roster'])
    .pipe(
      tap(_ => this.messageService.add(`fetched team roster=${id}`)),
      catchError(this.handleError<Player>(`getRoster id=${id}`))
    )
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
