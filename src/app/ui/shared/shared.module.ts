import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSearchControlComponent } from './app-search-control/app-search-control.component';
import { AppFocusDirective } from './app-self-focus/app-focus.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppSearchControlComponent,
		AppFocusDirective
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		AppSearchControlComponent
	]
})
export class SharedModule {
}
