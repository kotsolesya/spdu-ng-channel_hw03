import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ChannelsService } from './../../rest/channels.service';
import { ChannelDto } from './../../rest/channel.dto';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { Subject } from 'rxjs/Subject';
import { UserDto } from '../../rest/user.dto';
import { UsersService } from '../../rest/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-channel',
	templateUrl: './channel.html'
})

export class ChannelComponent implements OnInit  {
    user: UserDto;
    channelId: number;

    constructor(private usersService: UsersService,
        private  router: Router) {
    }

    ngOnInit() {
        this.user = this.getUserFromStorage();
        this.channelId = +this.router.url.split('/')[2];
    }

    signOut() {
		localStorage.removeItem('user');
		this.usersService.destroy();
		// this.router.navigate(['/', ]);
	}


    private getUserFromStorage(): UserDto {
        const data = window.localStorage.getItem('user');
        if (!data) {
            return;
        }
        return new UserDto(JSON.parse(data));
    }


}
