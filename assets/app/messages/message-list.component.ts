import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message-list',
    template:`
    <div class="row">
        <app-message [messageVarClass]="msg"
        (editClicked_MesaggeMetodoClasse)="messageBinding.content = $event"
        *ngFor="let msg of messageS">
        </app-message>
    </div>
`/*,
providers: [MessageService]*/
})
export class MessageListComponent implements OnInit{
    messageS: Message[] = [
        new Message("Texto da Mensagem-list", "Phillipe"),
        new Message("Texto 2 da Mensagem-list", "Phillipe"),
        new Message("Texto 3 da Mensagem-list", "Phillipe"),
    ];
    constructor (private messageService: MessageService){}
    
    ngOnInit(): void{
        this.messageS = this.messageService.getMessages()
        .subscribe(
            (dadosSucesso : Message[]) => {
                this.messageS = dadosSucesso;
                console.log(dadosSucesso)
            },
            dadosErro => console.log(dadosErro)
        );
    }
}