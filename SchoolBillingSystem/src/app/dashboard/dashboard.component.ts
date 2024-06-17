import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  alertMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/payment-options']);
    } else {
      this.alertMessage = 'Please fill in all the required fields.';
    }
  }

  onClear(form: NgForm) {
    form.resetForm();
    this.alertMessage = null;
  }
}
