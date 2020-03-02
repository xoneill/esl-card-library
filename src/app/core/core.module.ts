import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CardsEffects } from './store/cards/cards.effects';
import { BusinessModule } from '../business/business.module';

@NgModule({
	imports: [
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot([CardsEffects]),

		BusinessModule
	]
})
export class CoreModule {
}
