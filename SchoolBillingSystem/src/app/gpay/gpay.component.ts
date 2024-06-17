import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent {

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/confirmation']);
  }

  onClear() {
    // Logic to clear the form
  }
}
