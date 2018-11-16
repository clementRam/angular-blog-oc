import {Component, OnInit, Input} from '@angular/core';
import {Post} from 'src/app/interfaces/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  addLike() {
    this.post.loveIts++;
  }

  substractLike() {
    this.post.loveIts--;
  }

  deletePost() {
    this.postService.deletePost(this.post);
    this.postService.emitPostsSubject();
  }

}
