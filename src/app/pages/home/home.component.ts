import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { EventCardComponent } from "../../components/event-card/event-card.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PrimaryButtonComponent, EventCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
