import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

//noinspection TypeScriptCheckImport
import {Constants} from "./services/constants";
import {AuthService} from "../auth/services/auth.service";
import {Home} from '../home';
import {Auth} from "../auth/auth";

@Component({
    selector: 'app',
    pipes: [],
    providers: [Constants, AuthService],
    directives: [],
    styles: [require('./app.css')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/login', name: 'Login', component: Auth, useAsDefault: true},
    {path: '/home', name: 'Home', component: Home}
    // {path: '/logout', name: 'Logout', component: Logout},
    // {path: '/home', name: 'Home', component: Home, useAsDefault: true},
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    // {path: '/about', name: 'About', loader: () => require('es6-promise!./../about/index')('About')},
])
/*
 $stateProvider
 .state('add-review', {
 url: '/add-review',
 templateUrl: 'views/review-form.html',
 controller: 'AddReviewController'
 })
 .state('all-reviews', {
 url: '/all-reviews',
 templateUrl: 'views/all-reviews.html',
 controller: 'AllReviewsController'
 })
 .state('edit-review', {
 url: '/edit-review/:id',
 templateUrl: 'views/review-form.html',
 controller: 'EditReviewController'
 })
 .state('delete-review', {
 url: '/delete-review/:id',
 controller: 'DeleteReviewController'
 })
 .state('forbidden', {
 url: '/forbidden',
 templateUrl: 'views/forbidden.html'
 })
 .state('login', {
 url: '/login',
 templateUrl: 'views/login.html',
 controller: 'AuthLoginController'
 })
 .state('logout', {
 url: '/logout',
 controller: 'AuthLogoutController'
 })
 .state('my-reviews', {
 url: '/my-reviews',
 templateUrl: 'views/my-reviews.html',
 controller: 'MyReviewsController',
 authenticate: true
 })
 .state('sign-up', {
 url: '/sign-up',
 templateUrl: 'views/sign-up-form.html',
 controller: 'SignUpController'
 })
 .state('sign-up-success', {
 url: '/sign-up/success',
 templateUrl: 'views/sign-up-success.html'
 });*/
export class App {
    response;
    name = 'Angular 2 Webpack Starter33358';

    constructor(private _AuthService:AuthService) {
    }

    logout() {
        this._AuthService.logout();
    }
}
