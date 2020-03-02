import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CardsDataService } from './cards/cards-data.service';

@NgModule({
	providers: [
		CardsDataService
	],
	imports: [
		HttpClientModule
	]
})
export class BusinessModule {
}
