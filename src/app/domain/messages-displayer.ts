import { Inject, Injectable } from "@angular/core";
import IDisplayMessages from "./ports/i-display-messages";
import IManageMessages from "./ports/i-manage-messages";
import { Observable,of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export default class MessagesDisplayer implements IDisplayMessages {
    messages: any[] = [];
    error: string = '';
    
    constructor(
        @Inject('IManageMessages') private _messagesManager: IManageMessages,
    ) {}

    askAnswer(prompt:any): Observable<void> {
        this.clearAll()
        return this._messagesManager.ask(prompt)
        .pipe(
            map((res:any) => { 


                if(!res.error){

                    this.error = ''
                    this.messages.push(res) 
                }else{
                    this.error =`Ha ocurrido un error, contacte al administrador`
                }
            }),
            catchError(err => {
                this.error = `Error de API con el prompt ${prompt}`
                return of()
            })
        );
    }

    clearAll(){
        this.error = '';
        this.messages = []
    }

}