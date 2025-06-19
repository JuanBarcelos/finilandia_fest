import { Component, Input, OnChanges } from '@angular/core';
import type { Event } from '../../interfaces/event';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

type EventCardProps = "primary" | "secondary" | "tertiary";
@Component({
  selector: 'app-event-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent implements OnChanges {
    @Input() variant: EventCardProps = "primary";
    @Input() date!: Date;

    eventList: Event[] =  [
        {
            id: 1,
            name: 'Festa da Aninha',
            date: '19 Junho, 2025',
            location: 'Rio de Janeiro - RJ',
            image: 'https://picsum.photos/600/400?random=1'
        },
        {
            id: 2,
            name: 'Congresso Regional',
            date: '19 Junho, 2025',
            location: 'São Paulo - SP',
            image: 'https://picsum.photos/600/400?random=2'
        },
        {
            id: 3,
            name: 'Culto Jovem',
            date: '19 Junho, 2025',
            location: 'Belo Horizonte - MG',
            image: 'https://picsum.photos/600/400?random=3'
        },
        {
            id: 4,
            name: 'Noite de Louvor',
            date: '20 Junho, 2025',
            location: 'Curitiba - PR',
            image: 'https://picsum.photos/600/400?random=4'
        },
        {
            id: 5,
            name: 'Palestra com Pr. João',
            date: '20 Junho, 2025',
            location: 'Fortaleza - CE',
            image: 'https://picsum.photos/600/400?random=5'
        },
        {
            id: 6,
            name: 'Retiro Espiritual',
            date: '21 Junho, 2025',
            location: 'Gramado - RS',
            image: 'https://picsum.photos/600/400?random=6'
        },
        {
            id: 7,
            name: 'Aniversário da Igreja',
            date: '21 Junho, 2025',
            location: 'Recife - PE',
            image: 'https://picsum.photos/600/400?random=7'
        },
        {
            id: 8,
            name: 'Seminário para Líderes',
            date: '23 Junho, 2025',
            location: 'Salvador - BA',
            image: 'https://picsum.photos/600/400?random=8'
        },
        {
            id: 9,
            name: 'Encontro de Casais',
            date: '27 Junho, 2025',
            location: 'Natal - RN',
            image: 'https://picsum.photos/600/400?random=9'
        },
        {
            id: 10,
            name: 'Ação Social',
            date: '28 Junho, 2025',
            location: 'Porto Alegre - RS',
            image: 'https://picsum.photos/600/400?random=10'
        }
    ];

    filteredEvents: any[] = [];

    ngOnChanges(): void {
        if (this.date) {
            const formattedDate = this.getFormattedDate();
            this.filteredEvents = this.eventList.filter(event => event.date === formattedDate);
        }
    }

    getFormattedDate(): string {
        const day = this.date.getDate();
        const month = this.date.toLocaleString('pt-BR', { month: 'long' });
        const year = this.date.getFullYear();

        return `${day} ${this.capitalize(month)}, ${year}`;
    }

    private capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}
