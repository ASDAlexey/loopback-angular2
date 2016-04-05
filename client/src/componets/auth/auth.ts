import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {AuthService} from "./services/auth.service.ts";

@Component({
    selector: 'login',
    template: require('./templates/login.html'),
})
export class Auth implements OnInit {
    response;
    item = {email: 'foo@bar.com', password: 'foobar'};
    form:ControlGroup;

    constructor(private _formBuilder:FormBuilder, private _AuthService:AuthService) {

    }

    ngOnInit():any {
        this.form = this._formBuilder.group({
            'password': ['', Validators.required],
            'email': ['', Validators.required]
        });
    }

    login() {
        this._AuthService.login({email: this.item.email, password: this.item.password}).subscribe(
            response => {
                this.response = response;
                this._AuthService.access_token = this.response.id;
                console.log(this.response);
            },
            error => console.log(error)
        )
    }
}