import { Routes } from '@angular/router';
import { CardsComponent } from './cards.component';

export const CardsRoutes: Routes = [
	{
		path: '',
		redirectTo: '/cards',
		pathMatch: 'full'
	},
	{
		path: 'cards',
		component: CardsComponent
	}
];
