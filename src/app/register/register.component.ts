import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {AuthService} from '../shared/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  @ViewChild('userName',{static:false}) userName:ElementRef;
  @ViewChild('userPassword',{static:false}) userPassword:ElementRef;

  constructor(private authService: AuthService){}
  isSubmitted=false;
 

  ngOnInit(){
    
  }

  onRegister(){
   const username=this.userName.nativeElement.value;
  const password=this.userPassword.nativeElement.value;

  this.authService.register(username,password);
  }
}

