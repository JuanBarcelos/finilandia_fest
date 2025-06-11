import { Component, Input } from '@angular/core';
import { Benefit } from '../../interfaces/benefit';

@Component({
  selector: 'app-benefit-card',
  imports: [],
  templateUrl: './benefit-card.component.html',
  styleUrl: './benefit-card.component.scss'
})
export class BenefitCardComponent {
    @Input() benefit!: Benefit;
}
