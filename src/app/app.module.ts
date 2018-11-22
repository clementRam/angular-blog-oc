import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostListItemComponent} from './components/post-list-item/post-list-item.component';
import { RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'new', component: NewPostComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', component: PostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    PostsComponent,
    UsersComponent,
    SignupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
