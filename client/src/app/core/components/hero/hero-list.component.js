/**
 * Created by linfeiyang on 16-9-22.
 */
import {Component, NgZone} from '@angular/core';
import template from './hero-list.template.html';
import {HeroService} from './hero.service';
import {AppComponent} from '../app/app.component';
import {Router} from '@angular/router';

@Component({
    selector: 'hero-list',
    template: template
})
export class HeroListComponent{

    constructor(heroService:HeroService, appComponent: AppComponent, ngZone: NgZone, router: Router) {
        this._router = router;
        this._ngZone = ngZone;
        this.heroes = [];
        appComponent.changeMenu('heroes');
        this._heroService = heroService;
        console.log('This is HeroListComponent!');
    };

    ngOnInit () {
        this.update();
    }

    async update() {
        let heroes = await this._heroService.getHeroes();
        this._ngZone.run(() => {
            this.heroes = heroes;
        });
    }

    onSelect(hero) {
        this._router.navigate(['/hero', hero.id]);
    }
}