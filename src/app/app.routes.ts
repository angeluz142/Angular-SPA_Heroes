import { Routes, RouterModule } from '@angular/router';
//import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchsComponent } from './components/searchs/searchs.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'searchs/:id', component: SearchsComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' },
   /* { path: 'path2', component: Name2Component },
    { path: 'path3', component: Name3Component },
    { path: 'path4', component: Name4Component },
    { path: '**', component: PageNotFoundComponent },*/

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

/*@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})*/
//export class FeatureRoutingModule {}

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
