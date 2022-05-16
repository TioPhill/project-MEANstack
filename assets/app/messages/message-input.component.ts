import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import {MessageService} from './message.services';
import {Message} from './message.model'
import * as jwt_decode from 'jwt-decode';
import {AuthService } from '../auth/auth.services';


@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
    //providers: [MessageService]

})

export class MessageInputComponent implements OnInit{
    constructor(private messageService: MessageService, private auth: AuthService){}

    messageLoad: Message;

    onClear(form: NgForm){
        this.messageLoad = null;
        form.resetForm();
    }

    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.messageLoad = message
        );
    }

    onSubmit(form: NgForm){
        const userToken = this.auth.getToken();
        const userDecoded = jwt_decode(userToken);
       if (this.messageLoad){
           this.messageLoad.content = form.value.myContentngForm;
           this.messageService.updateMessage(this.messageLoad)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
           this.messageLoad = null;
       }
       else{
        

            const messageAux = new Message(form.value.myContentngForm, userDecoded.firstName, "", userDecoded.userID);
            this.messageService.addMenssage(messageAux)
                .subscribe(
                    dadosSucesso => console.log(dadosSucesso),
                    dadosErro => console.log(dadosErro)
                );
       }
        console.log(form);
        form.resetForm();
    }

}
