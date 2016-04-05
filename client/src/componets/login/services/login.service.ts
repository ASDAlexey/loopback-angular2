import {Injectable} from 'angular2/core';
import {Http, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {Constants} from "../../app/services/constants";

@Injectable()
export class LoginService {
    constructor(private _http:Http, private constants:Constants) {
    }

    login(post:{email:string,password:string}):Observable<any> {
        const body = JSON.stringify(post);
        // headers.append('Content-Type', 'application/x-www-urlencoded');
        console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(`${this.constants.base_url}/api/Reviewers/login`, body, {headers}).map(res => res.json())
    }
}