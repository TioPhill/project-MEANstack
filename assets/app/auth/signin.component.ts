import {Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Http, Response, Headers} from '@angular/http';
import {NgForm} from '@angular/forms'
import {AuthService } from './auth.services';
import {Router} from '@angular/router'




@Component({
    selector: 'app-sigin',
    templateUrl: './signin-component.html',
    providers: [AuthService]    

})

export class SigninComponent implements OnInit{
    myForm:FormGroup;
    
    constructor(private auth: AuthService,
                private router: Router
    ){}


    onSubmit(form: NgForm){
        
               
        this.auth.logarService(this.myForm.value)
        .subscribe(
            res => {
                console.log(res);
                localStorage.setItem('token',res['token']);
                this.router.navigate(['/message']);
            },
            err => console.log(err)
        )

        

    }

    ngOnInit(){
        this.myForm = new FormGroup({                     
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),

            passwordTS: new FormControl(null, Validators.required)   
        });
    }

}