/**
 * Created by linfeiyang on 16-9-21.
 */
import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {HeroListComponent} from './components/hero/hero-list.component';
import {AboutComponent} from './components/about/about.component';

import {HeroListService} from './components/hero/hero-list.service';


export {AppComponent};

export const CORE_DECLARATIONS = [HomeComponent, AppComponent, HeroListComponent, AboutComponent];
export const CORE_PROVIDERS = [HeroListService, AppComponent];