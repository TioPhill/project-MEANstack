import {Message} from './message.model';
import { Input, Injectable, EventEmitter } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operator/map';
import {AuthService } from '../auth/auth.services';


@Injectable()
export class MessageService{
    private messagesService: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private auth: AuthService){}

    deleteMessage(message: Message){
        this.messagesService.splice(this.messagesService.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/'+message.messageId)
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }


    editMessage(message: Message){
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message){
        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/message/'+message.messageId, bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));

    }

    addMenssage(message: Message){        
        //this.messagesService.push(message);
        console.log(this.messagesService);
        
        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => {
                const aux = responseRecebida.json();              

                const newObjMessage = new Message(aux.objMessageSave.content, aux.objMessageSave.user.firstName,
                                                  aux.objMessageSave._id, aux.objMessageSave.user._id);
                this.messagesService.push(newObjMessage);
                return newObjMessage;
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessage(){
        return this.http.get('http://localhost:3000/message')
            .map((responseRecebida: Response) =>{
                const responseEmJSON = responseRecebida.json();
                const messageSResponseRecebida = responseEmJSON.objMessageSRecuperados;
                
                let transfomedCastMessagesModelFrontend: Message[] = [];
                for (let msg of messageSResponseRecebida) {
                        console.log('msg => ', msg)
                        transfomedCastMessagesModelFrontend.push(
                            new Message(msg.content, msg.user));

                            
                    }
                this.messagesService = transfomedCastMessagesModelFrontend;
                return transfomedCastMessagesModelFrontend;
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido));
    }

   

}
