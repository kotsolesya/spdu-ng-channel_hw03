import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChannelComponent } from './channel.component';
import { ChannelDetailsModule } from './channel-details/channel-details.module';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		ChannelDetailsModule
	],
	declarations: [
		ChannelComponent
	],
	exports: [
		ChannelComponent
	]
})
export class ChannelModule {}
