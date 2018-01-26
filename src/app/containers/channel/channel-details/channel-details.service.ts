//import { Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MessagesService } from './../../../rest/messages.service';
import { MessageDto } from '../../../rest/message.dto';

@Injectable()
export class ChannelDetailsSevice {
    private cache: MessageDto[] = [];

    constructor(private messagesService: MessagesService) {	}

    get() {
        const subj = new Subject();
        this.messagesService.get()
            .subscribe(list => {
                //subj.next(list);
                list.filter(i => {
                    return !this.cache.find(m => m.date === i.date);
                })
                .forEach(i => subj.next(i));
                this.cache = list;
            });
        return subj;
    }
}