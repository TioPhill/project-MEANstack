import { Http } from "@angular/http";
import { Observable } from "rxjs";
import{ Message } from "./message.model";

export class MessageService {
    private messageSService: Message[] = [];

constructor(private http: Http){}

    addMessage(message: Message){
        this.messageSService.push(message);

    const bodyReq = JSON.stringify(message);
    return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
        .map((responseRecebida: Response) => {
            const responseEmJSON = responseRecebida.json();
            const messageSResponseRecebida = responseEmJSON.objSMessageSRecuperadoS;
            let transformedCastMessagesModelFrontend: Message[] = [];
                for(let msg of messageSResponseRecebida){
                    transformedCastMessagesModelFrontend.push(
                        new Message(msg.content, 'Phill', msg._id, null));
                }
                this.messageSService = transformedCastMessagesModelFrontend;
                return transformedCastMessagesModelFrontend;
        }
        .catch((errorRecebido : Response) => Observable.throw(errorRecebido.json()));
    }

    getMessages(){
        return this.messageSService;
    }
    deleteMessage(message: Message){
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }
}