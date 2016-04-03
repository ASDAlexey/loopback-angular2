import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

//noinspection TypeScriptCheckImport
import {Home} from '../home';

@Component({
    selector: 'app',
    pipes: [],
    providers: [],
    directives: [],
    styles: [require('./app.css')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', name: 'Index', component: Home, useAsDefault: true},
    {path: '/home', name: 'Home', component: Home},
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    {path: '/about', name: 'About', loader: () => require('es6-promise!./../about/index')('About')},
])
export class App {
    name = 'Angular 2 Webpack Starter33358';

    constructor() {
    }
}
