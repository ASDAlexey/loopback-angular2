import {Component} from 'angular2/core';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';
import {HttpService} from "./services/http.service";

@Component({
    selector: 'home',  // <home></home>
    providers: [Title, HttpService],
    directives: [XLarge],
    pipes: [],
    styles: [require('./assets/styles/home.css')],
    template: require('./templates/home.html')
})
export class Home {
    response;

    constructor(public title:Title, private _httpService:HttpService) {

    }

    ngOnInit() {
        console.log('hello `Home` component');
    }

    onClick() {
        this._httpService.getPosts()
            .subscribe(
                response => {
                    this.response = response;
                    console.log(this.response);
                },
                error => console.log(error)
            )
    }

}
