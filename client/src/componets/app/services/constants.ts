import {Injectable} from 'angular2/core';

@Injectable()
export class Constants {
    base_url:string;

    constructor() {
        this.base_url = 'http://localhost:3000';
    }
}