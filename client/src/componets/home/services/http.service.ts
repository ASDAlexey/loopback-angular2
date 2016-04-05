import {Injectable} from 'angular2/core';
import {Http, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {Constants} from "../../app/services/constants";
@Injectable()

export class HttpService {
    constructor(private _http:Http, private constants:Constants) {
    }

    getPosts():Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get(`${this.constants.base_url}/api/CoffeeShops`, {headers: headers}).map(res => res.json())
    }

    createPost(post:{title:string,body:string,userId:number}):Observable<any> {
        const body = JSON.stringify(post);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-urlencoded');
        console.log(body);
        return this._http.post('http://jsonplaceholder.typicode.com/posts', body, {
            headers: headers
        }).map(res => res.json())
    }
}