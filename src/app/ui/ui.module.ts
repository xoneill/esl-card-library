import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from './cards/cards.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,

		CardsModule,
		SharedModule
	]
})
export class UiModule {
}
