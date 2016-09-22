/**
 * Created by linfeiyang on 16-9-22.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class HeroListService {

    constructor(http:Http) {
        this._http = http;
    }

    getHeroes() {
        return this._http.get('/api/heroes').map(res => res.json()).toPromise();
    }
}