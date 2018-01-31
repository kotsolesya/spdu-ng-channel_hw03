import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ChannelsService } from './../../rest/channels.service';
import { ChannelDto } from './../../rest/channel.dto';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-channels',
    templateUrl: './channels.html'
})

export class ChannelsComponent implements OnInit, OnDestroy {
    @Input() currentChannel: ChannelDto;

    private sub: Subscription;
    channels: ChannelDto[] = [];

    constructor( private channelsService: ChannelsService) {}

    ngOnInit() {
        this.sub = this.channelsService.get().subscribe(channels => this.channels = channels);
        console.log(this.currentChannel);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
