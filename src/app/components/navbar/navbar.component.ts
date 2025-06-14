import { Component } from '@angular/core';
import { BtnSocialNetworksComponent } from "../btn-social-networks/btn-social-networks.component";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [BtnSocialNetworksComponent, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
