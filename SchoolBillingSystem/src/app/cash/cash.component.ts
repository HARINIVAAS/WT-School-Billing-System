import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent {

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/confirmation']);
  }

  onClear() {
    // Logic to clear the form
  }
}
