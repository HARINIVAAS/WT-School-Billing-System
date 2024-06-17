import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent {

  constructor(private router: Router) {}

  navigateTo(option: string) {
    this.router.navigate([`/${option}`]);
  }
}
