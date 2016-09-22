/**
 * Created by linfeiyang on 16-9-22.
 */
import {Component, NgZone} from '@angular/core';
import template from './hero-list.template.html';
import {HeroListService} from './hero-list.service';
import {AppComponent} from '../app/app.component';

@Component({
    selector: 'hero-list',
    template: template
})
export class HeroListComponent{

    constructor(heroListService:HeroListService, appComponent: AppComponent, ngZone: NgZone) {
        this._ngZone = ngZone;
        this.heroes = [];
        appComponent.changeMenu('heroes');
        this._heroListService = heroListService;
        console.log('This is HeroListComponent!');
    };

    ngOnInit () {
        this.update();
    }

    async update() {
        let heroes = await this._heroListService.getHeroes();
        this._ngZone.run(() => {
            this.heroes = heroes;
        });
    }
}