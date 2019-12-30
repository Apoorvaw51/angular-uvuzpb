import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule,MatCardModule,MatCheckboxModule,MatDatepickerModule,MatNativeDateModule,MatListModule, MatSlideToggleModule } from '@angular/material';
 import { MatMenuModule} from '@angular/material/menu';
 import { AppRoutingModule } from './app-routing.module';
 import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './overview/overview.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { HeaderComponent } from './header/header.component';
import { BookAppointmentComponent } from './bookAppointment/bookAppointment.component';
 import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HospitalServicesComponent} from './hospital-services/hospital-services.component';
import {SuperSpecialityComponent} from './super-speciality/super-speciality.component';
import {BroadSpecialityComponent} from './broad-speciality/broad-speciality.component';
import {AuxiliaryServiceComponent} from './auxiliary/auxiliary.component';
import {DiagnosticServiceComponent} from './diagnostic/diagnostic.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientComponent } from './patient/patient.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    MatButtonModule, 
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule
    ],

  declarations: [ AppComponent,
    HelloComponent,
    HomeComponent,
    ContactComponent,
    OverviewComponent,
    SpecialitiesComponent,
    HeaderComponent,
    HospitalServicesComponent,
    BookAppointmentComponent,
    SuperSpecialityComponent,
    BroadSpecialityComponent,
    AuxiliaryServiceComponent,
    DiagnosticServiceComponent,
    LoginComponent,
    RegisterComponent,
    PatientComponent,
    FooterComponent
    ],

  bootstrap:    [ AppComponent ]
})


export class AppModule { }
