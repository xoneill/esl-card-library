import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsHeaderComponent } from './header/cards-header.component';
import { CardsGridComponent } from './grid/cards-grid.component';
import { CardsStatusComponent } from './status/cards-status.component';
import { CardComponent } from './grid/card/card.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { CardsFetchBtnComponent } from './fetch-btn/cards-fetch-btn.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		CardsComponent,
		CardsHeaderComponent,
		CardsGridComponent,
		CardsStatusComponent,
		CardComponent,
		LoadingIndicatorComponent,
		CardsFetchBtnComponent
	],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		ToastrModule.forRoot({
			timeOut: 2000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true
		}),
	]
})
export class CardsModule {
}
