import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public postList: any;
  public postSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.postList = posts;
      }
    );
    this.postService.emitPostsSubject();
  }

}
