import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postList: Array<Post>;

  constructor() { }

  ngOnInit() {
  }

}
