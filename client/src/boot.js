/**
 * Created by linfeiyang on 16-9-21.
 */
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CORE_DECLARATIONS, AppComponent, CORE_PROVIDERS} from './app/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {routes} from './app/core/app.routes';

@NgModule({
    declarations: [CORE_DECLARATIONS],
    imports: [
        HttpModule, BrowserModule, FormsModule, ReactiveFormsModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    bootstrap: [AppComponent],
    providers: [
        CORE_PROVIDERS
    ]
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

