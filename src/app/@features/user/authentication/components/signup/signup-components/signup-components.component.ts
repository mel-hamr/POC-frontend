import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSerivce } from '@api/services/user.service';
import { User } from '@shared/models/user.model';
import { SignupFormHelper } from '../helpers/signup-form.helper';

@Component({
  selector: 'app-signup-components',
  templateUrl: './signup-components.component.html',
  styleUrls: ['./signup-components.component.css']
})
export class SignupComponent {

    signupForm : FormGroup
    passwordIsValid : boolean 
    constructor(private userSerivce : UserSerivce
        ,private signupFormHelper : SignupFormHelper) {

        this.passwordIsValid = false;
        this.signupForm = this.signupFormHelper.constructForm();
    }

    signupUser() {
        const form : any = this.signupForm.value
        let user : User = {
            userName : form.userName,
            email:  form.email,
            password: form.password
        }
        this.userSerivce.signupUser(user);
        console.log(this.signupForm.value);
    }

    checkPassword(){
        let p = this.signupForm.get('password')?.value
        let pc = this.signupForm.get('passwordConformation')?.value
        if(p === pc){
            this.passwordIsValid = true;
        }else{
            this.passwordIsValid = false;
        }
    }

    get userName(){
        return this.signupForm.get('userName');
    }
    get email(){
        return this.signupForm.get('email');
    }
    get password(){        
        return this.signupForm.get('password');
    }
    get passwordConformation(){
        return this.signupForm.get('passwordConformation');
    }

}
