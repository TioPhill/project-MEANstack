import { Message } from "./message.model"
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MessageService } from "./message.services";
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles:[`   .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%
    }
    .config{
        display: inline-block;
        font-style: right;
        font-size: 12px;
        width: 19%
    } `]
})
export class MessageComponent{
    color = 'yellow';
    tam = 12;
    onMudaStyle(){
        this.color = 'red';
        this.tam = 16;
    }
    @Input() messageVarClass : Message = new Message("","");
    @Input ('inputMessage') messageVarClassAlias : Message = new Message("","");
    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output("outputMessage") editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    onEdit(){
        this.editClicked_MessageMetodoClasse.emit("Texto veio da msg child para o app pai");
        this.editClicked_MessageMetodoClasseAlias.emit("Texto veio da msg child para o pai - alias");
    }

    constructor(private messageServiceObj: MessageService){ }
    onDelete(){
        this.messageServiceObj.deleteMessage(this.messageVarClass);
    }
}