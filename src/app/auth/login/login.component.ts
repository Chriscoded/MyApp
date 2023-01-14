import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/app/firebase.config';
import { AuthService } from '../auth.service';

// declare var showPassword: any;
declare function showPassword(): void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:LoginForm = {
    email : '',
    password : '',
  }
  

  showPassword = false;
  

  constructor(private authService : AuthService) {
    // showPassword();
  }

  ngOnInit(): void {
    // initializeApp(firebaseConfig);
    //new this.showPassword();
  }
  
 

  submit(){
    // console.log(this.form);
    this.authService.login(this.form);
  }
  

  isLoading() {
    return this.authService.isLoading;
  }
  //  triggershowPassword(){
  //   showPassword();
  // }

  toggleShow() {
    this.showPassword = !this.showPassword;
    // = this.showPassword ? 'text' : 'password';
  }
}
