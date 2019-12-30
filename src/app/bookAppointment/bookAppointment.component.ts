import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-appointment',
  templateUrl: './bookAppointment.component.html',
  styleUrls: ['./bookAppointment.component.css']
})
export class BookAppointmentComponent implements OnInit{
  isSubmitted=false;
 constructor(){ }
 
onSubmit(){
   this.isSubmitted=true;
  }
}
