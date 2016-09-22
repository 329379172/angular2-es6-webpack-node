/**
 * Created by linfeiyang on 16-9-22.
 */
import {Component} from '@angular/core';
import template from './about.template.html';
import {AppComponent} from '../app/app.component';
@Component({
    selector: 'about',
    template: template
})
export class AboutComponent{
    constructor(appComponent: AppComponent) {
        appComponent.changeMenu('about');
        console.log('This is AboutComponent!');
    }
}