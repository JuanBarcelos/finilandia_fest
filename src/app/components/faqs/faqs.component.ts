import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent implements OnInit{
    toggle: Boolean = true;
    plus: string = "ph ph-plus";
    minus: string = "ph ph-minus";
    openedFaqs: boolean[] = [];
    faqs = [
        {
            title: "Quanto tempo antes preciso reservar a barraca?",
            describe: 'O ideal é com pelo menos 15 dias de antecedência, principalmente em meses de alta demanda. Mas se tiver uma data em mente, já chama a gente pra garantir!'
        },
        {
            title: "Vocês atendem festas em outras cidades?",
            describe: 'Atendemos sim! Dependendo da distância, pode haver uma taxa de deslocamento — mas fazemos de tudo pra levar nossa barraca até você. Fala com a gente pra consultar!'
        },
        {
            title: "A montagem da barraca está inclusa no valor?",
            describe: 'Sim! A montagem e desmontagem são por nossa conta. Você só precisa escolher o lugar perfeito e aproveitar o evento.'
        },
        {
            title: "Tem opção de barraca personalizada?",
            describe: 'Temos sim! Dá pra personalizar detalhes como cores, plaquinhas e até o mix de balas — tudo pra deixar sua festa com a sua cara (e muito mais doce!).'
        },
    ];

    ngOnInit(): void {
        this.openedFaqs = this.faqs.map(() => false);
    }

    toggleFaq(index: number): void {
        this.openedFaqs[index] = !this.openedFaqs[index];
    }

}

