import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChannelsComponent } from './channels.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule // тепер можем форми використовувать
	],
	declarations: [
		ChannelsComponent
    ],
    exports: [
		ChannelsComponent
	]
})
export class ChannelsModule {}
