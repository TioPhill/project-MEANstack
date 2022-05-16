import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {myrouting} from './app.routing'

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import {MessageListComponent} from './messages/message-list.component';
import {MessageInputComponent} from './messages/message-input.component';
import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from  './auth/authentication.component';
import {HeaderComponent} from './header.component';
import {SigninComponent} from './auth/signin.component';
import {SignupComponent} from './auth/signup.component';
import {LogoutComponent} from './auth/logout.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.services';
import {AuthGuard} from './guards/auth.guard';



@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent                
     
    ],
    imports: [BrowserModule, FormsModule, myrouting, ReactiveFormsModule, HttpModule, HttpClientModule],
    providers:[
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}