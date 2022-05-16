import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms'
import { User } from "../auth/user.model";
import { UserService } from './user.services';


@Component({
    selector: 'app-signup',
    templateUrl: './signup-component.html',
    providers: [UserService]

})

export class SignupComponent implements OnInit{
    myForm: FormGroup;
    constructor(private userService: UserService){}


    

    ngOnInit(){
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)      
        });
    }

    onSubmit(form: NgForm){
        const userAux = new User(form.value.firstNameTS,form.value.lastNameTS,
                                form.value.emailTS, form.value.passwordTS );
            this.userService.addUser(userAux)
                .subscribe(
                    dadosSucesso => console.log(dadosSucesso),
                    dadosErro => console.log(dadosErro)
                );
        console.log(this.myForm);
        this.myForm.reset();
    }

}