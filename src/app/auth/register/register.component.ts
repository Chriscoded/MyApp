import { Component } from '@angular/core';
import { LoginForm, RegisterForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/app/firebase.config';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form:RegisterForm = {
    email : '',
    password : '',
    confirm_password:''
  }


  constructor(private authService : AuthService) {}

  ngOnInit(): void {
    // initializeApp(firebaseConfig);
  }
 
  submit(){
    this.authService.register(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
