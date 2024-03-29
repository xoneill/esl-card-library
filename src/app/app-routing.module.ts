import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsRoutes } from './ui/cards/cards.routes';

const routes: Routes = [...CardsRoutes];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
