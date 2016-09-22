/**
 * Created by linfeiyang on 16-9-22.
 */
import {Component} from '@angular/core';
import template from './home.template.html';
import {AppComponent} from '../app/app.component';

@Component({
    selector: 'home',
    template: template
})
export class HomeComponent{
    constructor(appComponent: AppComponent) {
        appComponent.changeMenu('home');
        console.log('this is HomeComponent');
    }
}