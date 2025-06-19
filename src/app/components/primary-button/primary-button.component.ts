import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() isClick: boolean = false;

    openWhatsApp(): void {
        const phoneNumber = '5521965712554';
        const message = encodeURIComponent('Olá! Encontrei o site da Finilândia Fest e fiquei super interessado(a) em levar a barraca de balas para minha festa!');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    }
}
