import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent{
 
 constructor(private router: Router){ }
  onLoginBtnClick(){
      this.router.navigate(['login'])
  }
}