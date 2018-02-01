import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MessagesService } from './../../../rest/messages.service';
import { MessageDto } from '../../../rest/message.dto';

@Injectable()
export class ChannelDetailsSevice {
    private cache: MessageDto[] = [];

    constructor(private messagesService: MessagesService) {	}

    get() {
        this.messagesService.get()
            .subscribe(allMessages => {
                allMessages.filter(message => {
                    return message.channelId === undefined;
                });
                this.cache = allMessages;
            });
    }
}
