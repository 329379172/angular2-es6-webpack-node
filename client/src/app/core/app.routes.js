/**
 * Created by linfeiyang on 16-9-21.
 */
import {HomeComponent} from './components/home/home.component';
import {HeroListComponent} from './components/hero/hero-list.component';
import {AboutComponent} from './components/about/about.component';
import {HeroDetailComponent} from './components/hero/hero-detail.component';

export const routes = [
    {
        path: 'heroes',
        component: HeroListComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'hero/:id',
        component: HeroDetailComponent
    }
];