import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ChannelDetailsComponent } from './channel-details.component';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule
	],
	declarations: [
		ChannelDetailsComponent
	],
	exports: [
		ChannelDetailsComponent
	]
})
export class ChannelDetailsModule {}
