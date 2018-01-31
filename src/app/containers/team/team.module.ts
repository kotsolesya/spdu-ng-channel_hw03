import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TeamComponent } from './team.component';
import { NewChannelModule } from '../../components/new-channel/new-channel.module';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		NewChannelModule
	],
	declarations: [
		TeamComponent
	],
	exports: [
		TeamComponent
	]
})
export class TeamModule {}
