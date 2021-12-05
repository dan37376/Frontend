import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ViewProfileComponent } from './pages/passenger/view-profile/view-profile.component';
import { ReserveticketComponent } from './pages/passenger/reserveticket/reserveticket.component';
import { PassengernavbarComponent } from './pages/passenger/passengernavbar/passengernavbar.component';
import { AvailablebusesComponent } from './pages/passenger/availablebuses/availablebuses.component';
import { PassengereditprofileComponent } from './pages/passenger/passengereditprofile/passengereditprofile.component';
import { RecentbookingsComponent } from './pages/passenger/recentbookings/recentbookings.component';
import { ViewreservationstatusComponent } from './pages/viewreservationstatus/viewreservationstatus.component';
import { AdminprofileComponent } from './pages/admin/adminprofile/adminprofile.component';
import { AdmineditComponent } from './pages/admin/adminedit/adminedit.component';
import { AddbusComponent } from './pages/admin/addbus/addbus.component';
import { ReservedticketsComponent } from './pages/admin/reservedtickets/reservedtickets.component';
import { AdminviewbusComponent } from './pages/admin/adminviewbus/adminviewbus.component';
import { AdminviewpassengerComponent } from './pages/admin/adminviewpassenger/adminviewpassenger.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    WelcomeComponent,
    ViewProfileComponent,
    ReserveticketComponent,
    PassengernavbarComponent,
    AvailablebusesComponent,
    PassengereditprofileComponent,
    RecentbookingsComponent,
    ViewreservationstatusComponent,
    AdminprofileComponent,
    AdmineditComponent,
    AddbusComponent,
    ReservedticketsComponent,
    AdminviewbusComponent,
    AdminviewpassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
