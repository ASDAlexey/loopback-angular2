import {Injectable} from 'angular2/core';
import {Http, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {Constants} from "../../app/services/constants";

@Injectable()
export class AuthService {
    public access_token;

    constructor(private _http:Http, private constants:Constants) {

    }

    login(post:{email:string,password:string}):Observable<any> {
        const body = JSON.stringify(post);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //noinspection TypeScriptValidateTypes
        return this._http.post(`${this.constants.base_url}/api/Reviewers/login`, body, {headers})
            .map(res => res.json());
        // .subscribe(
        //     data => this.setToken(data.id),
        //     err => console.log(err),
        //     ()=> console.log('complete')
        // );
    }

    private setToken(id:any) {
        console.log('id');
        console.log(id);
    }

    logout() {
        let access_token = this.access_token ? `?access_token=${this.access_token}` : '';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post(`${this.constants.base_url}/api/Reviewers/logout${access_token}`, '', {headers})
            .map(res => res.json())
            // .subscribe(
            //     data => console.log(data),
            //     err => console.log(err),
            //     ()=> console.log('complete')
            // );
    }

    setAuthenticated(res) {

    }
}