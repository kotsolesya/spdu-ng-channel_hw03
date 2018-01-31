import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ChannelsService } from '../../rest/channels.service';
import { ChannelDto } from '../../rest/channel.dto';

@Component({
    selector: 'app-new-channel',
    templateUrl: './new-channel.html'
})

export class NewChannelComponent {
    @Output() sent = new EventEmitter();
    @Input() channelName: string;


    constructor(private channelsService: ChannelsService) { }

    submit() {
        if (this.channelName.length < 2) {
            return;
        }
        const channel = new ChannelDto();
        channel.id = (new Date).getTime();
        channel.name = this.channelName;
        this.channelsService.add(channel).subscribe(() => {
            this.sent.emit(channel);
        });
    }

}
