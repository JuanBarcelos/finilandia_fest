import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-social-networks',
  imports: [],
  templateUrl: './btn-social-networks.component.html',
  styleUrl: './btn-social-networks.component.scss'
})
export class BtnSocialNetworksComponent {
   @Input() icon: string = '';
}
