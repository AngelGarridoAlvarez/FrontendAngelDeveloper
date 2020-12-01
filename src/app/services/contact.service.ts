import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private mailThisApi = ' https://mailthis.to/angelmail' //La api de mailthis en la que me he creado un alias para que no se vea mi correo electrónico

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.mailThisApi, input, {responseType: 'text'}).pipe(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
    )
  }
}
