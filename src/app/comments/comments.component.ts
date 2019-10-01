import { Component, OnInit } from '@angular/core';
import { CommentItem } from '../comment-item';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  newComment = '';
  items : CommentItem[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
	this.items = this.commentService.displayComment();
  }

  save() : void{
    let item = new CommentItem(this.newComment);
    this.items.push(item);
  }

}
