import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './modules/store/store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: 
    [
        AppComponent,
        StoreComponent,
    ],
    imports: 
    [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserAnimationsModule
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
