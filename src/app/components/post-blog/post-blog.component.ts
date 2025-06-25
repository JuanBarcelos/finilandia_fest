import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-blog',
  imports: [],
  templateUrl: './post-blog.component.html',
  styleUrl: './post-blog.component.scss'
})
export class PostBlogComponent {
    constructor(private route: Router) { }
    posts: Post[] = [
        {
            id: 1,
            title: 'Como criar uma mesa de doces encantadora',
            imageUrl: 'post/post-1.jpg',
            text: 'Quer que sua mesa de doces vire o centro das atenções? Neste post, mostramos como combinar a barraca com decorações temáticas, balões e iluminação pra criar uma experiência mágica pra todos os convidados...',
            date: '12 de Junho, 2025',
        },
        {
            id: 2,
            title: '5 temas de festa infantil com balas Fini',
            imageUrl: 'post/post-2.jpg',
            text: 'Desde o universo unicórnio até os super-heróis mais adorados, descubra os temas queridinhos do momento e como as nossas balas podem entrar na brincadeira de um jeito delicioso...',
            date: '11 de Junho, 20255',
        },
        {
            id: 3,
            title: 'Dicas rápidas para transformar qualquer...',
            imageUrl: 'post/post-1.jpg',
            text: 'Com poucos elementos e a barraca certa, dá pra levar aquele clima de parque pra dentro de casa, salão ou até garagem. Veja nossas ideias práticas (e acessíveis) pra encantar os pequenos...',
            date: '10 de Junho, 2025',
        },
        {
            id: 4,
            title: 'Como criar uma mesa de doces encantadora',
            imageUrl: 'post/post-1.jpg',
            text: 'Quer que sua mesa de doces vire o centro das atenções? Neste post, mostramos como combinar a barraca com decorações temáticas, balões e iluminação pra criar uma experiência mágica pra todos os convidados...',
            date: '12 de Junho, 2025',
        },
    ]

    viewPost(id: number) {
        this.route.navigate(['/blog/post', id])
    };

}
