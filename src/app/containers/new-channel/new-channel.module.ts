import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewChannelComponent } from './new-channel.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule
	],
	declarations: [
		NewChannelComponent
    ],
    exports: [
		NewChannelComponent
	]
})
export class NewChannelModule {}
