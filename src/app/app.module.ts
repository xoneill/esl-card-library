import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BusinessModule } from './business/business.module';
import { UiModule } from './ui/ui.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		CoreModule,
		BusinessModule,
		UiModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
