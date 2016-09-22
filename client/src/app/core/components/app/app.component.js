/**
 * Created by linfeiyang on 16-9-21.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

import template from './app.template.html';
import css from '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css';


@Component({
    selector: 'my-app',
    template: template,
    style: css
})
export class AppComponent{
    constructor(router: Router){
        console.log('This is AppComponent!');
        console.log(window.location.pathname);
        this.currUrl = 'home';
        this.name = 'Angular2';
    }

    changeMenu(currUrl) {
        this.currUrl = currUrl;
    }
    
}