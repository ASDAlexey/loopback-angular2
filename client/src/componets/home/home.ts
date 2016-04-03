import {Component} from 'angular2/core';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';

@Component({
    selector: 'home',  // <home></home>
    providers: [Title],
    directives: [XLarge],
    pipes: [],
    styles: [require('./assets/styles/home.css')],
    template: require('./templates/home.html')
})
export class Home {
    data = {value: ''};

    constructor(public title:Title) {

    }

    ngOnInit() {
        console.log('hello `Home` component');
    }

}
