import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { EventCardComponent } from "../../components/event-card/event-card.component";
import { BenefitCardComponent } from "../../components/benefit-card/benefit-card.component";
import type { Benefit } from '../../interfaces/benefit';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FaqsComponent } from "../../components/faqs/faqs.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PrimaryButtonComponent, EventCardComponent, BenefitCardComponent, CarouselComponent, FaqsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    benefits: Benefit[] = [
        {
            title: 'Montagem Rápida',
            description: 'Chegamos, montamos e deixamos tudo pronto pra brilhar — sem dor de cabeça pra você!',
            imageUrl: 'home/benefits/banana-icon.svg',
            color: 'green-bg'
        },
        {
            title: 'Presença Marcante',
            description: 'Com design colorido e detalhes que chamam atenção, nossa barraca vira o ponto alto da festa.',
            imageUrl: 'home/benefits/little-kiss-icon.svg',
            color: 'purple-bg'
        },
        {
            title: 'Encanto Garantido',
            description: 'Balas Fini, sorrisos e aquele toque mágico que transforma qualquer comemoração em um momento inesquecível.',
            imageUrl: 'home/benefits/dentures-icon.svg',
            color: 'blue-bg'
        }
    ]
}
