import { Injectable } from '@angular/core';
import { CommentItem } from './comment-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private wsUrl = 'https://paros-ws.herokuapp.com/comments';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  displayComment(): Observable<CommentItem[]> {
    return this.http.get<CommentItem[]>(this.wsUrl)
	.pipe(
          tap(_ => this.log('fetched infos ...')),
          catchError(this.handleError<CommentItem[]>('displayComment',[]))
        );
  }

  addComment(comment: CommentItem) : Observable<CommentItem> {
    return this.http.post<CommentItem>(this.wsUrl, comment, this.httpOptions)
        .pipe(
      	  tap((newComment:CommentItem) => this.log('added infos ...')),
          catchError(this.handleError<CommentItem>('addComment'))
        );
  }

  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
	console.error(error);
        return of(result as T);
    };
  }

  private log(message: string){
	console.log(message);
  }

}
