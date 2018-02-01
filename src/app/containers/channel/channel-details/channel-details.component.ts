import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { ChannelDetailsSevice } from './channel-details.service';
import { UserDto } from '../../../rest/user.dto';
import { MessageDto } from '../../../rest/message.dto';
import { UsersService } from '../../../rest/users.service';
import { MessagesService } from '../../../rest/messages.service';
import { ChannelDto } from '../../../rest/channel.dto';
import { ChannelsService } from '../../../rest/channels.service';

interface ChannelParams {
	channelId: number;
}

@Component({
	selector: 'app-channel-details',
	templateUrl: './channel-details.html',
	providers: [
		ChannelDetailsSevice
	]
})

export class ChannelDetailsComponent  implements OnInit {

	id: number;
	name: string;
    channelMessages: MessageDto[] = [];
	user: UserDto;
	channels: ChannelDto[] = [];

    private sub: Subscription;
    private usersSub: Subscription;

	constructor ( private usersService: UsersService,
                  private messagesService: MessagesService,
                  private channelsService: ChannelsService,
                  private router: Router, route: ActivatedRoute) {
                    route.params.subscribe((params: ChannelParams) => {
        			this.id = +params.channelId;
		        	this.name = this.getChannelName(this.id);
        });
    }

    ngOnInit() {
	    this.user = this.getUserFromStorage();
    }

	getChannelName(channelId: number) {
		this.sub = this.channelsService.get().subscribe(channels => this.channels = channels);
        const channel = this.channels.find(item => item.id === channelId);
        if (!channel) {
            return;
        }
        return channel.name;
    }

    private getUserFromStorage(): UserDto {
        const data = window.localStorage.getItem('user');
        if (!data) {
            return;
        }
        return new UserDto(JSON.parse(data));
    }
}
