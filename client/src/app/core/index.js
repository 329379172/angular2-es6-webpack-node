/**
 * Created by linfeiyang on 16-9-21.
 */
import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {HeroListComponent} from './components/hero/hero-list.component';
import {AboutComponent} from './components/about/about.component';
import {HeroDetailComponent} from './components/hero/hero-detail.component';

import {HeroService} from './components/hero/hero.service';


export {AppComponent};

export const CORE_DECLARATIONS = [HomeComponent, AppComponent, HeroListComponent, AboutComponent, HeroDetailComponent];
export const CORE_PROVIDERS = [HeroService, AppComponent];