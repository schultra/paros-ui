import { Component, OnInit } from '@angular/core';
import { CommentItem } from '../comment-item';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  newComment = 'toto';
  items : CommentItem[] = [
    {id: 1, lib: 'foo'},
    {id: 2, lib: 'bar'},
    {id: 3, lib: 'toto'}
  ];

  constructor() { }

  ngOnInit() {
  }

  save() : void{
    let item = new CommentItem(this.newComment);
    this.items.push(item);
  }

}
