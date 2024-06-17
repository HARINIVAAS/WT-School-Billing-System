import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CashComponent } from './cash/cash.component';
import { GpayComponent } from './gpay/gpay.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'payment-options', component: PaymentOptionsComponent },
  { path: 'debit-card', component: DebitCardComponent },
  { path: 'cash', component: CashComponent },
  { path: 'gpay', component: GpayComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    PaymentOptionsComponent,
    DebitCardComponent,
    CashComponent,
    GpayComponent,
    ConfirmationComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
