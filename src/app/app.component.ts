import {Component, OnInit} from '@angular/core';
import {PostService} from './services/post.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-blog-oc';

  public postList: any;
  public postSubscription: Subscription;


  constructor() {
  }

  ngOnInit() {
  }
}
