import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChannelsComponent } from './channels.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule
	],
	declarations: [
		ChannelsComponent
    ],
    exports: [
		ChannelsComponent
	]
})
export class ChannelsModule {}
