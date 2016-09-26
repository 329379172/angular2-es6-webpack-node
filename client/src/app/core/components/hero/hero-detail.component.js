/**
 * Created by linfeiyang on 16-9-26.
 */
import {Component, NgZone} from '@angular/core';
import template from './hero-detail.template.html';
import {HeroService} from './hero.service';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from '../app/app.component';

@Component({
    selector: 'hero-detail',
    template: template
})
export class HeroDetailComponent {
    constructor(heroService:HeroService, route:ActivatedRoute, ngZone:NgZone, appComponent:AppComponent) {
        this._heroService = heroService;
        this._route = route;
        this._ngZone = ngZone;
        this.hero = {};
        appComponent.changeMenu('heroes');
        console.log('This is HeroDetailComponent');
        this.getData();
    }

    async getData() {
        this.heroId = this._route.snapshot.params['id'];
        var self = this;
        let heroData = await self._heroService.getHeroDetail(this.heroId);
        console.log(heroData);
        this._ngZone.run(() => {
            self.hero = heroData;
        });
    }
}