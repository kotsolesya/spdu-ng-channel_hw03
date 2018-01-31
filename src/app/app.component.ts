import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import { UsersService } from './rest/users.service';
import { UserDto } from './rest/user.dto';
import { ChannelDto } from './rest/channel.dto';
import { ChannelsService } from './rest/channels.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.html'
})

export class AppComponent implements OnInit {
	authorized = false;
	user: UserDto;
	channel: ChannelDto;
	channelService: ChannelsService;

	constructor(private usersService: UsersService,
				private router: Router) { }

	runStream() {
		this.stream().subscribe(b => console.log(b));
	}

	stream() {
		const subj = new Subject();
		setInterval(()=> {
			subj.next(Date.now()); // кидаем по потоку каждую сек дату
		}, 1000);
		return subj;
	}

	signOut() {
		localStorage.removeItem('user');
		this.usersService.destroy();
		this.updateAuthorized();
		//this.router.navigate(['/', ]);
	}

	ngOnInit() {
		this.user = this.getUserFromStorage();
		this.updateAuthorized();
	}

	setUser(user: UserDto) {
		this.user = user;
		this.setUserFromStorage(user);
		this.updateAuthorized();
	}

	setChannel(channel: ChannelDto) {
		this.channel = channel;
		this.channelService.add(channel);
	}

	private updateAuthorized() {
		this.authorized = !!this.user;
		if (this.authorized) {
			this.usersService.init();
		} else {
			this.usersService.destroy();
		}
	}

	private getUserFromStorage(): UserDto {
		const data = window.localStorage.getItem('user');
		if (!data) {
			return;
		}
		return new UserDto(JSON.parse(data));
	}

	private setUserFromStorage(user: UserDto) {
		window.localStorage.setItem('user', JSON.stringify(user));
	}
}
