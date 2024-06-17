import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alertMessage: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    // Check if the form is valid
    if (this.isFormValid()) {
      const userDetails = this.getUserDetails();
      // Send HTTP request to login
      this.http.post<any>('http://localhost:3000/api/login', userDetails)
        .subscribe(
          response => {
            console.log(response);
            // Redirect to dashboard on successful login
            this.router.navigate(['/dashboard']);
          },
          error => {
            console.error(error);
            this.alertMessage = 'Error logging in';
            setTimeout(() => this.alertMessage = null, 3000);
          }
        );
    }
  }

  private isFormValid(): boolean {
    // Implement your form validation logic here
    // For simplicity, just return true for now
    return true;
  }

  private getUserDetails(): any {
    // Get form values
    // Implement getting form values from your template
    // For example:
    // const username = this.loginForm.get('username')?.value;
    // const rollno = this.loginForm.get('rollno')?.value;
    // const email = this.loginForm.get('email')?.value;
    // const password = this.loginForm.get('password')?.value;
    // return { username, rollno, email, password };

    // For demonstration purpose, return mock user details
    return {
      username: 'testuser',
      rollno: '123',
      email: 'test@example.com',
      password: 'password'
    };
  }
}
