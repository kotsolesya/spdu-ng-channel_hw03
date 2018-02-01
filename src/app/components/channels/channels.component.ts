import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ChannelsService } from './../../rest/channels.service';
import { ChannelDto } from './../../rest/channel.dto';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute } from '@angular/router';

type ChannelParams = {
	channelId: number
}

@Component({
    selector: 'app-channels',
    templateUrl: './channels.html'
})

export class ChannelsComponent implements OnInit, OnDestroy {
    @Input() currentChannel: ChannelDto;
    
    id: number;
    name: string;
    private sub: Subscription;
    channels: ChannelDto[] = [];

    constructor( private channelsService: ChannelsService,
                 private router: Router,
                 route: ActivatedRoute ) {
                    route.params.subscribe((params: ChannelParams) => {
                        this.id = +params.channelId;
                    });
    }

    ngOnInit() {
        this.sub = this.channelsService.get().subscribe(channels => this.channels = channels);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }    
}
