import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Injectable()
export class SignupFormHelper {


    constructForm() {
        return  new FormGroup({
            userName : new FormControl('', [Validators.required]),
            email : new FormControl('', [Validators.email,Validators.required]),
            password : new FormControl('', [Validators.required]),
            passwordConformation : new FormControl('', [Validators.required])
        });
    }
    
}