//import { Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MessagesService } from './../../../rest/messages.service';

@Injectable()
export class ChannelDetailsSevice {
    constructor(private messagesService: MessagesService) {	}

    get() {
        const subj = new Subject();
        this.messagesService.get()
            .subscribe(list => {
                subj.next(list);
            });
        return subj;
    }
}