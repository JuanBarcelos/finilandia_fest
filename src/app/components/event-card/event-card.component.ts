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
    @Input() month: string = '';
    @Input() day: string = '';
    @Input() fullDay: string = '';
    @Input() eventTitle: string = '';
    @Input() eventLocale: string = '';

    @Input() date!: Date;

    eventList: Event[] =  [
        {
            id: 1,
            name: 'Festa da Karoline',
            date: '1 Agosto, 2025',
            location: 'Nilópolis - RJ',
            image: 'https://picsum.photos/600/400?random=1'
        },
        {
            id: 2,
            name: 'Festa da Vanessa',
            date: '2 Agosto, 2025',
            location: 'Bangu - RJ',
            image: 'https://picsum.photos/600/400?random=2'
        },
        {
            id: 3,
            name: 'Festa da Renata Tannuri',
            date: '8 Agosto, 2025',
            location: 'Barra da Tijuca - RJ',
            image: 'https://picsum.photos/600/400?random=3'
        },
        {
            id: 4,
            name: 'Festa da Tuane',
            date: '9 Agosto, 2025',
            location: 'Ilha do Governador - RJ',
            image: 'https://picsum.photos/600/400?random=4'
        },
        {
            id: 5,
            name: 'Festa da Sabrina',
            date: '13 Agosto, 2025',
            location: 'Ilha do Governador - RJ',
            image: 'https://picsum.photos/600/400?random=5'
        },
        {
            id: 6,
            name: 'Festa da Gisane Dias',
            date: '30 Agosto, 2025',
            location: 'Nova Iguaçu - RJ',
            image: 'https://picsum.photos/600/400?random=6'
        },
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
