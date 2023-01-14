import { Observable,of } from "rxjs";

export default interface IManageMessages{
    
    
    ask(message: string): Observable<any[]>
}