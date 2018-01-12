import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Team } from './team';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeamService {
  httpUrl = 'https://statsapi.web.nhl.com/api/v1';

  constructor(
    private http: HttpClient, 
    private messageService: MessageService) { }

  getTeams():Observable<Team[]>{
    return this.http.get<Team[]>(this.httpUrl+"/teams")
      .map(team => team['teams'])
      .pipe(
        tap(_ => this.log('Fetched Teams')),
        catchError(this.handleError('getTeams',[]))
      );
  }

  private log(message: string) {
    this.messageService.add('Team Service: ' + message);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
