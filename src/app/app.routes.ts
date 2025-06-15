import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/post/:id',
        component: BlogPostComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    }
];
