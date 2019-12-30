import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './overview/overview.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { BookAppointmentComponent } from './bookAppointment/bookAppointment.component';
import { HospitalServicesComponent} from './hospital-services/hospital-services.component';
import {SuperSpecialityComponent} from './super-speciality/super-speciality.component';
import {BroadSpecialityComponent} from './broad-speciality/broad-speciality.component';
import {AuxiliaryServiceComponent} from './auxiliary/auxiliary.component';
import {DiagnosticServiceComponent} from './diagnostic/diagnostic.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientComponent } from './patient/patient.component';
import { MatIconModule } from "@angular/material/icon";


const routes: Routes = [
  {path: 'home', component:HomeComponent,children:[
    {path: 'super-speciality',component:SuperSpecialityComponent},
    {path: 'broad-speciality',component:BroadSpecialityComponent},
    {path: 'auxiliary', component: AuxiliaryServiceComponent},
    {path: 'diagnostic', component:DiagnosticServiceComponent}
  ]},

  {path: 'hospital-services', component:HospitalServicesComponent},
  {path: 'overview',component: OverviewComponent},
  {path: 'specialities', component: SpecialitiesComponent},
  {path: 'contact', component: ContactComponent} ,
  
  {path: 'register', component:RegisterComponent},
  {path: 'patient', component:PatientComponent,children:[
    {path: 'login', component: LoginComponent}
  ]},
  {path: 'bookAppointment', component: BookAppointmentComponent} 
]

@NgModule({
  imports: [RouterModule.forRoot(routes), MatIconModule],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }