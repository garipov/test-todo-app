import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  public username!: string;
  public password!: string;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    })
  }

  login(){
    this.loginService.setUserData(this.form.getRawValue());
    this.router.navigate(['todo']);
  }

}
