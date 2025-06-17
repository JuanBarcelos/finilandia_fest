import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TeamCardsComponent } from "../../components/team-cards/team-cards.component";

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, FooterComponent, TeamCardsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
