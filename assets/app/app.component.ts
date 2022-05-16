import { Component } from '@angular/core';
import { Message } from './messages/message.model';
import {MessageService} from './messages/message.services';




@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]    
})
export class AppComponent {
    messageBinding: Message = new Message("Texto de Mensagem", "Philipe");
    messageBindingAlias: Message = new Message("Texto da mensagem com Alias", "Philipe");
}
