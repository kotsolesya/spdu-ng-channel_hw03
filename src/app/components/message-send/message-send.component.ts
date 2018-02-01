import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessagesService } from '../../rest/messages.service';
import { MessageDto } from './../../rest/message.dto';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from '../../rest/channels.service';

@Component({
    selector: 'app-message-send',
    templateUrl: './message-send.html'
})

export class MessageSendComponent {
    @Output() sent = new EventEmitter<never>();
    @Input() userId: number;
    @Input() channelId: number;

    textMessage: string;

    constructor(private messagesService: MessagesService,
        private channelsService: ChannelsService) {
     }

    send() {
        if (this.textMessage.length < 1) {
            return;
        }
        const message = new MessageDto();
        message.date = new Date(Date.now());
        message.text = this.textMessage;
        message.userId = this.userId;
        message.channelId = this.channelId;
        this.textMessage = '';
        this.messagesService.add(message).subscribe(() => {
            this.sent.emit();
        });
    }
}
