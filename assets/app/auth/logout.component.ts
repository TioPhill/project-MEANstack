import { Component} from "@angular/core";
import {AuthService } from './auth.services';


@Component({
    selector: 'app-logout',
    template:
    `<div class="col-md-8 col-md-offset-2">
        <button class="btn btn-danger" (click) = "this.auth.logout()">Logout</button>
    </div>
    `,
    providers: [AuthService]    


})

export class LogoutComponent{
    constructor (private auth: AuthService){}
    
}