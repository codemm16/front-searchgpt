import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IManageMessages from '../domain/ports/i-manage-messages';
import { of } from "rxjs"
import { catchError } from "rxjs/operators"

@Injectable({ providedIn: 'root' })
export class MessageAdapterService implements IManageMessages {
  apiUrl = 'http://localhost:5000'

  constructor(private _http:HttpClient){}

  ask(message: string) {
    return this._http.post(this.apiUrl,{prompt:message}).pipe(
     
      catchError(err => {
      
        return of(err)
      })
    )
  }


}
