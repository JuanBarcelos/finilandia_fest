import { Component } from '@angular/core';
import { TeamMember } from '../../interfaces/team-member';

@Component({
  selector: 'app-team-cards',
  imports: [],
  templateUrl: './team-cards.component.html',
  styleUrl: './team-cards.component.scss'
})
export class TeamCardsComponent {
    memberList: TeamMember[] = [
        {
            id: 1,
            name: 'Camila Andrade',
            title: 'Coordenadora de Produção',
            curiosity: 'Ama testar novas combinações de doces nos bastidores e acredita que “uma festa de verdade começa com um sorriso sincero”.',
            imageURL: 'testimonial/testimonial-1.jpg'
        },
        {
            id: 2,
            name: 'Diego Luz',
            title: 'Designer e Montador de Barracas',
            curiosity: 'Já montou barracas temáticas inspiradas em filmes, histórias infantis e até em pedidos de casamento! “A decoração é a primeira impressão do encantamento.”',
            imageURL: 'testimonial/testimonial-2.jpg'
        },
        {
            id: 3,
            name: 'Rebeca Souza',
            title: 'tendimento e Agendamentos',
            curiosity: 'Cristã convicta, diz que "cada evento é um presente de Deus para tocar vidas com leveza". Ama conversar com os clientes e entender o sonho por trás de cada pedido.',
            imageURL: 'testimonial/testimonial-3.jpg'
        },
        {
            id: 4,
            name: 'Raquel Alves',
            title: 'Coordenadora de Produção',
            curiosity: 'Ama testar novas combinações de doces nos bastidores e acredita que “uma festa de verdade começa com um sorriso sincero”.',
            imageURL: 'testimonial/testimonial-1.jpg'
        },
        {
            id: 5,
            name: 'Claudio Alves',
            title: 'Montador de Barracas',
            curiosity: 'Já montou barracas temáticas inspiradas em filmes, histórias infantis e até em pedidos de casamento! “A decoração é a primeira impressão do encantamento.”',
            imageURL: 'testimonial/testimonial-2.jpg'
        },
        {
            id: 6,
            name: 'Suzana Souza',
            title: 'tendimento e Agendamentos',
            curiosity: 'Cristã convicta, diz que "cada evento é um presente de Deus para tocar vidas com leveza". Ama conversar com os clientes e entender o sonho por trás de cada pedido.',
            imageURL: 'testimonial/testimonial-3.jpg'
        },
    ]

}

