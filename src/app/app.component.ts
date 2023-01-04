import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  constructor(private authService: AuthService){}

  ngOnInit():void{
    initializeApp(firebaseConfig);
  }

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout();
  }
}
