import { Component } from '@angular/core';
import { BtnSocialNetworksComponent } from "../btn-social-networks/btn-social-networks.component";

@Component({
  selector: 'app-navbar',
  imports: [BtnSocialNetworksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
