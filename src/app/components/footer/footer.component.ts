import { Component, Input } from '@angular/core';
import { BtnSocialNetworksComponent } from "../btn-social-networks/btn-social-networks.component";

@Component({
  selector: 'app-footer',
  imports: [BtnSocialNetworksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    @Input() isBgColor: boolean = false;
}
