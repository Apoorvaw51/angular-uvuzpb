import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {AuthService} from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

    @ViewChild('userName',{static:false}) userName:ElementRef;
  @ViewChild('userPassword',{static:false}) userPassword:ElementRef;
  isSubmitted=false;
   constructor(private authService: AuthService){}

  ngOnInit(){
    
  }

 onLogin(){
   const username=this.userName.nativeElement.value;
  const password=this.userPassword.nativeElement.value;

  this.authService.login(username,password)
  }
}

