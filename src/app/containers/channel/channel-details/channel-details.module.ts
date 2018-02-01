import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ChannelDetailsComponent } from './channel-details.component';
import { MessagesModule } from '../../../components/messages/messages.module';
import { MessageSendModule } from '../../../components/message-send/message-send.module';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		MessagesModule,
		MessageSendModule
	],
	declarations: [
		ChannelDetailsComponent
	],
	exports: [
		ChannelDetailsComponent
	]
})
export class ChannelDetailsModule {}
