import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChannelComponent } from './channel.component';
import { ChannelDetailsModule } from './channel-details/channel-details.module';
import { ChannelsModule } from '../../components/channels/channels.module';
import { UsersModule } from '../../components/users/users.module';
import { MessagesModule } from '../../components/messages/messages.module';
import { MessageSendModule } from '../../components/message-send/message-send.module';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		ChannelsModule,
		ChannelDetailsModule,
		UsersModule,
		MessagesModule,
		MessageSendModule,
	],
	declarations: [
		ChannelComponent
	],
	exports: [
		ChannelComponent
	]
})
export class ChannelModule {}
