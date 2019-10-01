import { Injectable } from '@angular/core';
import { CommentItem } from './comment-item';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  displayComment():CommentItem[] {
    var items : CommentItem[] = [
      {id: 1, lib: 'foo'},
      {id: 2, lib: 'bar'},
      {id: 3, lib: 'toto'}
    ];
    return items;
  }

}
