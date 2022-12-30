import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "@shared/models/user.model";

@Injectable({
    providedIn: 'root'
})

export class UserSerivce {

    constructor(private http: HttpClient) {
        console.log("UserSerivce");
    }

    signupUser(data : User) {
        this.http.post('https://localhost:3000/endpoint',data)
          .subscribe((response) => {
            console.log(response);
        });
      }
}