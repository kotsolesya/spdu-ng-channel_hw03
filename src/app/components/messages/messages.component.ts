import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { UsersService } from './../../rest/users.service';
import { UserDto } from './../../rest/user.dto';
import { MessagesService } from './../../rest/messages.service';
import { MessageDto } from './../../rest/message.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.html'
})

export class MessagesComponent implements OnInit, OnDestroy {
    @Input() channelId: number;
    private messagesSub: Subscription;
    private usersSub: Subscription;

    id: number;
    users: UserDto[] = [];
    messages: MessageDto[] = [];

    constructor (
        private usersService: UsersService,
        private messagesService: MessagesService,
        private router: Router, route: ActivatedRoute ) {

        route.params.subscribe((params) => {
			this.id = +params.channelId;
        });
    }

    ngOnInit() {
        this.messagesService.init();
        this.messagesSub = this.messagesService.get()
                .subscribe(messages => this.messages = messages.filter(message => {
                    if (this.id === undefined || isNaN(this.id) ) {
                        return message;
                    } else {
                        return message.channelId === this.id;
                    }
                }));
        this.usersSub = this.usersService.get().subscribe(users => this.users = users);
    }

    getUserName(userId: number): string {
        const user = this.users.find(u => u.id === userId);
        if (!user) { return; }
        return user.name;
    }

    ngOnDestroy() {
        this.messagesSub.unsubscribe();
        this.usersSub.unsubscribe();
    }

}
