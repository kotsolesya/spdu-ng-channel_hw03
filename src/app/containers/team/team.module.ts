import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TeamComponent } from './team.component';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule
	],
	declarations: [
		TeamComponent
	],
	exports: [
		TeamComponent
	]
})
export class TeamModule {}
