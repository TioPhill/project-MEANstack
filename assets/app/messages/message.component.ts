import {Component, Input, Output} from '@angular/core';
import { Message } from './message.model';
import { EventEmitter } from '@angular/core';
import {MessageService} from './message.services';
//@angular/compiler/src/i18n/i18n_ast

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
            .author{
                display: inline-block;
                font-style: italic;
                font-size: 12px;
                width: 80%;
            }
            .config{
                display: inline-block;
                text-align: right;
                font-size: 12px;
                width: 19%;
            }
    `]
})

export class MessageComponent{

    
    
    @Input() messageVarClasse : Message =  new Message("","");
    @Input('inputMessage') messageVarClasseAlias: Message = new Message("","");
    
    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter();

       

    onEdit(){
        this.editClicked_MessageMetodoClasse.emit("Texto veio de message child para pai");
        this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de message child Alias para pai");
        
    }

    constructor(private messageServiceObj: MessageService){}
    
    
    onEditService(){
        this.messageServiceObj.editMessage(this.messageVarClasse);
    }

    onDeleteService(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
    }


}