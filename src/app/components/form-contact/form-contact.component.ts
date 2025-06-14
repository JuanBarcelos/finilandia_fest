import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {
    contactForm!: FormGroup;
        constructor() {
            this.contactForm = new FormGroup({
                name: new FormControl('', [Validators.required]),
                email: new FormControl('', [Validators.required, Validators.email]),
                phoneNumber: new FormControl('', [Validators.required]),
                about: new FormControl('', [Validators.required]),
                message: new FormControl('', [Validators.required])
            });
        }
    onSubmit() {
        console.log(this.contactForm.value);
    }
}
