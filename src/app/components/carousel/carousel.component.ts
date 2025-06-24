import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnSocialNetworksComponent } from "../btn-social-networks/btn-social-networks.component";
import type { Testimonial } from '../../interfaces/testimonial';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, BtnSocialNetworksComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
    currentIndex = 0;
    testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'MARIANA TAVARES',
            title: 'Festa da Júlia (6 anos)',
            text: 'A barraca foi simplesmente o ponto alto da festa! As crianças amaram, os adultos tiraram mil fotos e o atendimento foi impecável. Já quero repetir no próximo ano!',
            imageUrl: 'testimonial/testimonial-1.jpg'
        },
        {
            id: 2,
            name: 'LUCAS ANDRADE',
            title: 'Chá Revelação da Gabi',
            text: 'Todo mundo comentou da barraca! Além de linda e bem montada, trouxe aquele toque divertido e doce que a gente queria. Atendimento nota mil!',
            imageUrl: 'testimonial/testimonial-2.jpg'
        },
        {
            id: 3,
            name: 'RENATA GOMES',
            title: 'Aniversário do Rafa (10 anos)',
            text: 'A barraca foi simplesmente o ponto alto da festa! As crianças amaram, os adultos tiraram mil fotos e o atendimento foi impecável. Já quero repetir no próximo ano!',
            imageUrl: 'testimonial/testimonial-3.jpg'
        },
        {
            id: 4,
            name: 'LUCAS ANDRADE',
            title: 'Chá Revelação da Gabi',
            text: 'Todo mundo comentou da barraca! Além de linda e bem montada, trouxe aquele toque divertido e doce que a gente queria. Atendimento nota mil!',
            imageUrl: 'testimonial/testimonial-2.jpg'
        },
        {
            id: 5,
            name: 'RENATA GOMES',
            title: 'Aniversário do Rafa (10 anos)',
            text: 'A barraca foi simplesmente o ponto alto da festa! As crianças amaram, os adultos tiraram mil fotos e o atendimento foi impecável. Já quero repetir no próximo ano!',
            imageUrl: 'testimonial/testimonial-3.jpg'
        },
        {
            id: 6,
            name: 'MARIANA TAVARES',
            title: 'Festa da Júlia (6 anos)',
            text: 'A barraca foi simplesmente o ponto alto da festa! As crianças amaram, os adultos tiraram mil fotos e o atendimento foi impecável. Já quero repetir no próximo ano!',
            imageUrl: 'testimonial/testimonial-1.jpg'
        },
        {
            id: 7,
            name: 'LUCAS ANDRADE',
            title: 'Chá Revelação da Gabi',
            text: 'Todo mundo comentou da barraca! Além de linda e bem montada, trouxe aquele toque divertido e doce que a gente queria. Atendimento nota mil!',
            imageUrl: 'testimonial/testimonial-2.jpg'
        }
    ]

    groupedTestimonials: any[][] = [];
    itemsPerSlide = 3;

    ngOnInit() {
        this.updateItemsPerSlide();
        this.groupTestimonials();

        window.addEventListener('resize', () => {
            this.updateItemsPerSlide();
            this.groupTestimonials();
        });
    }

    groupTestimonials() {
        this.groupedTestimonials = [];

        for (let i = 0; i < this.testimonials.length; i += this.itemsPerSlide) {
            this.groupedTestimonials.push(this.testimonials.slice(i, i + this.itemsPerSlide));
        }

        // Reset para evitar index inválido
        this.currentIndex = 0;
    }

    updateItemsPerSlide() {
        const width = window.innerWidth;

        if (width <= 767) {
            this.itemsPerSlide = 1; // mobile
        } else if (width <= 1024) {
            this.itemsPerSlide = 2; // tablet
        } else {
            this.itemsPerSlide = 3; // desktop
        }
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.groupedTestimonials.length;
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.groupedTestimonials.length) % this.groupedTestimonials.length;
    }
}
