import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // Navigate to another page or reset after 3 seconds if needed
    }, 3000);
  }
}
