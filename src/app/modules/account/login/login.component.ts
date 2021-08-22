import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm   : FormGroup;
  loginAlert  : boolean;
  constructor(
    private _formBuilder  : FormBuilder,
    private _router       : Router,
  ) { 
    
  }

  ngOnInit(): void {
    
    this.loginForm = this._formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^.{8,}$')]]
    });
  }
  onSubmit(){
    
  }
}
