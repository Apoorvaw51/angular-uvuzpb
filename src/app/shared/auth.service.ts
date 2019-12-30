import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn:'root'
})

export class AuthService{

  constructor(private router: Router){}
  register(username,password){
   localStorage.setItem('Username',username);
   localStorage.setItem('Password',password);
  }

  login(username,password){
    const newUsername=localStorage.getItem('Username');
    const newPassword=localStorage.getItem('Password');
    if(username===newUsername && password===newPassword){
      this.router.navigate(['/home'])
    }else{
      alert('Invalid Credentials!')
      this.router.navigate(['/register'])
    }
  }

  
}