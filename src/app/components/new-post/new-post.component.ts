import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    let newPost: Post = form.value;
    newPost.id = this.postService.getNewId();
    newPost.loveIts = 0;
    newPost.created_at = new Date;
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }
}
