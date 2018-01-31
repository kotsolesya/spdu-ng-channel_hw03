import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UsersService } from './rest/users.service';
import { ChannelsService } from './rest/channels.service';
import { MessagesService } from './rest/messages.service';


import { ChannelModule } from './containers/channel/channel.module';
import { NewChannelModule } from './containers/new-channel/new-channel.module';
// import { ChannelDetailsModule } from './containers/channel-details/channel-details.module';

import { channelRoutes } from './containers/channel/channel.routes';
import { newChannelRoutes } from './containers/new-channel/new-channel.routes';
// import { channelDetailsRoutes } from './containers/channel-details/channel-details.routes';


import { LoginModule } from './components/login/login.module';
import { UsersModule } from './components/users/users.module';
import { MessagesModule } from './components/messages/messages.module';
import { MessageSendModule } from './components/message-send/message-send.module';
import { ChannelsModule } from './components/channels/channels.module';


//import { Router } from '@angular/router/src/router';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'channel',
		pathMatch: 'full'
	},
	...channelRoutes,
	...newChannelRoutes
];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule, // тепер можем форми використовувать
		LoginModule,
		NewChannelModule,
		UsersModule,
		ChannelsModule,
		MessagesModule,
		MessageSendModule,
		ChannelModule,
		RouterModule.forRoot(appRoutes),
	],
	declarations: [
		AppComponent
	],
	providers: [
		UsersService,
		ChannelsService,
		MessagesService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
