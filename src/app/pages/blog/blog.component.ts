import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PostBlogComponent } from "../../components/post-blog/post-blog.component";

@Component({
  selector: 'app-blog',
  imports: [NavbarComponent, FooterComponent, PostBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
