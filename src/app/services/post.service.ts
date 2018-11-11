import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public postsSubject = new Subject<Post[]>();

  private posts = [
    {
      id: 0,
      title: 'Premier post',
      content: 'Voici le contenu du premier post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda aut dolorem dolores dolorum explicabo ipsam magnam nemo officia quam, quasi reprehenderit sunt voluptatum? Deserunt doloremque enim esse expedita explicabo fuga mollitia nesciunt nobis, officia reiciendis repellendus suscipit tenetur ullam velit vitae? Deleniti dolorum id inventore nobis nostrum officia porro quibusdam ratione repellendus tenetur. Animi aperiam, asperiores consequuntur corporis cupiditate delectus deleniti doloribus eaque ex exercitationem facere fuga harum, id inventore minima nihil nisi obcaecati odit perferendis quaerat quasi quidem quo quod quos reiciendis rerum ut veniam. Aspernatur culpa, dolore exercitationem quia quidem quis soluta suscipit voluptates. Accusamus cupiditate, dolore dolorem earum, explicabo facilis illo maiores, molestias mollitia officia quis quod quos rem sapiente ullam unde veritatis voluptatibus! A at aut, consectetur corporis deleniti doloribus eaque earum, excepturi expedita fuga id impedit ipsam minima mollitia necessitatibus nostrum omnis quia quisquam rem, repellendus tenetur vel voluptatibus. Ad expedita impedit possimus similique sint. Ad adipisci alias animi commodi cumque dicta doloremque eaque eligendi et fugit harum quibusdam quos, rerum saepe sed sequi tempore velit, voluptatum. Animi dolorem fuga iste nisi omnis quisquam ratione veritatis vero! Architecto beatae commodi corporis doloribus eaque, expedita iure minus molestiae natus nesciunt odio, perferendis qui quibusdam tempora.',
      loveIts: 0,
      created_at: new Date('2018-10-31 18:00')
    }, {
      id: 1,
      title: 'Second post',
      content: 'Voici le contenu du second post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda aut dolorem dolores dolorum explicabo ipsam magnam nemo officia quam, quasi reprehenderit sunt voluptatum? Deserunt doloremque enim esse expedita explicabo fuga mollitia nesciunt nobis, officia reiciendis repellendus suscipit tenetur ullam velit vitae? Deleniti dolorum id inventore nobis nostrum officia porro quibusdam ratione repellendus tenetur. Animi aperiam, asperiores consequuntur corporis cupiditate delectus deleniti doloribus eaque ex exercitationem facere fuga harum, id inventore minima nihil nisi obcaecati odit perferendis quaerat quasi quidem quo quod quos reiciendis rerum ut veniam. Aspernatur culpa, dolore exercitationem quia quidem quis soluta suscipit voluptates. Accusamus cupiditate, dolore dolorem earum, explicabo facilis illo maiores, molestias mollitia officia quis quod quos rem sapiente ullam unde veritatis voluptatibus! A at aut, consectetur corporis deleniti doloribus eaque earum, excepturi expedita fuga id impedit ipsam minima mollitia necessitatibus nostrum omnis quia quisquam rem, repellendus tenetur vel voluptatibus. Ad expedita impedit possimus similique sint. Ad adipisci alias animi commodi cumque dicta doloremque eaque eligendi et fugit harum quibusdam quos, rerum saepe sed sequi tempore velit, voluptatum. Animi dolorem fuga iste nisi omnis quisquam ratione veritatis vero! Architecto beatae commodi corporis doloribus eaque, expedita iure minus molestiae natus nesciunt odio, perferendis qui quibusdam tempora.',
      loveIts: 0,
      created_at: new Date('2018-09-23 16:30')
    }
  ];

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    post.id = this.posts[this.posts.length - 1].id + 1;
    this.posts.push(post);
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter(item => item.id !== post.id);
  }
}
