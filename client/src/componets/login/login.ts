import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators, Control} from "angular2/common";
import {LoginService} from "./services/login.service";

@Component({
    selector: 'login',
    template: require('./templates/login.html'),
    providers: [LoginService]
})
export class Login implements OnInit {
    response;
    item = {email: 'foo@bar.com', password: 'foobar'};
    form:ControlGroup;

    constructor(private _formBuilder:FormBuilder, private _LoginService:LoginService) {

    }

    ngOnInit():any {
        this.form = this._formBuilder.group({
            'password': ['', Validators.required],
            'email': ['', Validators.required]
        });
    }

    onSubmit() {
        this._LoginService.login({email: this.item.email, password: this.item.password}).subscribe(
            response => {
                this.response = response;
                console.log(this.response);
            },
            error => console.log(error)
        )
    }
}