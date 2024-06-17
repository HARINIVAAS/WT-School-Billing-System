import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alertMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (!form.valid) {
      this.alertMessage = 'Please fill the required information';
      setTimeout(() => this.alertMessage = null, 3000);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
