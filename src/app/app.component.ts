import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from './login/login.service';
import { UserDataModel } from './login/models/user-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'login-app';
  userData: UserDataModel;
  userDataSubscription: Subscription;

  constructor(private loginService: LoginService){

  }

  ngOnInit(): void{
    this.loginService.checkAuthData();
    this.userDataSubscription = this.loginService.getUserData().subscribe((userData) => {
      this.userData = userData;
    });
  }

  ngOnDestroy(){
    this.userDataSubscription.unsubscribe();
  }
}
