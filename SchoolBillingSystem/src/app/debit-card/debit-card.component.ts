import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent {
  alertMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/confirmation']);
    } else {
      this.alertMessage = 'Please fill in all the required fields.';
    }
  }

  onClear(form: NgForm) {
    form.resetForm();
    this.alertMessage = null;
  }
}
