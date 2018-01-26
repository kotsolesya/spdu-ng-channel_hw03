import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersService } from './rest/users.service';


import { ChannelModule } from './containers/channel/channel.module';
import { TeamModule } from './containers/team/team.module';
// import { ChannelDetailsModule } from './containers/channel-details/channel-details.module';

import { AppComponent } from './app.component';
import { channelRoutes } from './containers/channel/channel.routes';
import { teamRoutes } from './containers/team/team.routes';
// import { channelDetailsRoutes } from './containers/channel-details/channel-details.routes';


import { LoginModule } from './components/login/login.module';
import { UsersModule } from './components/users/users.module';
import { MessagesModule } from './components/messages/messages.module';
import { MessageSendModule } from './components/message-send/message-send.module';
import { MessagesService } from './rest/messages.service';

import { Router } from '@angular/router/src/router';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'channel',
		pathMatch: 'full'
	},
	...channelRoutes,
	...teamRoutes
];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule, // тепер можем форми використовувать
		LoginModule,
		UsersModule,
		MessagesModule,
		MessageSendModule,
		ChannelModule,
		TeamModule,
		RouterModule.forRoot(appRoutes),
	],
	declarations: [
		AppComponent
	],
	providers: [
		UsersService,
		MessagesService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
