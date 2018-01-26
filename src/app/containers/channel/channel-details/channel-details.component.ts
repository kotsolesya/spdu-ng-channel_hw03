import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { ChannelDetailsSevice } from './channel-details.service';

type ChannelParams = {
	channelId: number
}

@Component({
	selector: 'app-channel-details',
	templateUrl: './channel-details.html',
	providers: [
		ChannelDetailsSevice
	]
})


export class ChannelDetailsComponent  {
	id: number;
	//router this.router = router вместо етого v constructor private router: Router
	constructor(
		private channelDetailsSevice: ChannelDetailsSevice,
		private router: Router, 
		route: ActivatedRoute
	) {
		route.params.subscribe((params: ChannelParams) => {
			//this.id = +params['channelId'];
			console.log('params',params);
			this.id = +params.channelId;
		});

		this.channelDetailsSevice.get()
			.subscribe(list => {
				console.log('list',list);
			});
		
	}

	goTo() {
		this.router.navigate(['/']);
	}
}
