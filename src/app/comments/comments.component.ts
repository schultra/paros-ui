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
     this.refreshList();
  }

  save() : void{
    let len = (this.items == null) ? 0 : this.items.length;
    let item = new CommentItem(len+1, this.newComment);
    this.addComment(item);
    this.refreshList();
  }


  private refreshList(){
       this.commentService.displayComment().
         subscribe(items => this.items = items);
  }

  private addComment(item: CommentItem){
       this.commentService.addComment(item).
	 subscribe(item => this.items.push(item));
  }

}
