import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { EventCardComponent } from "../../components/event-card/event-card.component";

@Component({
  selector: 'app-event',
  imports: [NavbarComponent, FooterComponent, EventCardComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {
    currentWeek: { day: string, date: number }[] = [];
    selectedFullDate: Date | null = null;
    currentWeekPtBr = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];

    ngOnInit(): void {
        this.loadCurrentWeek();
    }

    loadCurrentWeek(): void {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - dayOfWeek);

        this.currentWeek = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            this.currentWeek.push({
                day: this.currentWeekPtBr[i],
                date: date.getDate(),
            });
        }
    }

    selectDate(weekDay: { day: string, date: number }): void {
        const today = new Date();
        const clickedDate = new Date(today.getFullYear(), today.getMonth(), weekDay.date);
        this.selectedFullDate = clickedDate;
    }
}
