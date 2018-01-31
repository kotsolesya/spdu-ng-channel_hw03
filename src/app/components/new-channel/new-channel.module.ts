import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NewChannelComponent } from './new-channel.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule // тепер можем форми використовувать
	],
	declarations: [
		NewChannelComponent
    ],
    exports: [
		NewChannelComponent
	]
})
export class NewChannelModule {}
