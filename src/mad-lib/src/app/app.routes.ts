import { Route } from '@angular/router';
import { HeroListComponent } from './heroList/hero-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HeroListComponent,
  },
];
