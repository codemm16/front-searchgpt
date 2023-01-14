import { Observable } from "rxjs"

export default interface IDisplayMessages {
    messages: any[]
    error:string
    
    askAnswer(prompt:any): Observable<void>
    

}