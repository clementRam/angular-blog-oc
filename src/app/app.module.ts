import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostListItemComponent} from './components/post-list-item/post-list-item.component';
import {Route, RouterModule} from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Route = [
  {path: 'posts', component: PostsComponent},
  {path: 'new', component: NewPostComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
