import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : Boolean = false;
  isLoading : Boolean = false;

  constructor(private router : Router){}

  login(form: LoginForm){

    if(this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;

        //when user successfully logged in
        this.isAuthenticated = true;

        this.router.navigate(['']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //when user could not login 
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false));

  }

  passwordMatched : Boolean = true;
  
  register(form: RegisterForm){
       //if loading is on going do return
    //this means if it is in loading state even if the user is clicking do nothing
    if(this.isLoading) return;

    this.isLoading = true;

    if(form.password != form.confirm_password){
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        //const user = userCredential.user;
        // ...
        //when user successfully logged in
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        //when user could not login 
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false));
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }

  authenticated(){
    return this.isAuthenticated;
  }

}
