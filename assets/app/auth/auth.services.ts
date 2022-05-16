import {User} from './user.model';
import { Input, Injectable, EventEmitter } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operator/map';
import {Router} from '@angular/router';





@Injectable()
export class AuthService{
    constructor(private http: HttpClient, private router:Router){}   

    
    

    logarService(credenciais: {emailTS: string, passwordTS: string}){
        return this.http.post('http://localhost:3000/auth', credenciais);
           
    }

    loggedIn(){
        if(localStorage.getItem('token')){
            return true;
        }
    }

    getToken(){
        return localStorage.getItem('token');
    }

    logout(){
        localStorage.removeItem('token');
        this.router.navigate(['/autenticacao']);
        
    }

}












