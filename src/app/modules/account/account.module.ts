
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/shared/angular-material/material.module';


@NgModule({
    declarations: 
    [
        LoginComponent,
        RegisterComponent,
        AccountComponent
    ],
    imports: 
    [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule
    ],
    providers: 
    [

    ],
    exports:
    [
        LoginComponent,
        RegisterComponent,
        AccountComponent,
    ]
})
export class AccountModule { }
