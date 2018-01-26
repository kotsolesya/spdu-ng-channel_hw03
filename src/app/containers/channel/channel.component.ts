import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'app-channel',
	templateUrl: './channel.html'
})

export class ChannelComponent  {
	id: number;
	//router this.router = router вместо етого v constructor private router: Router
	constructor(private router: Router) {
		this.id = 7;
	}

	goTo() {
		this.router.navigate(['/team']);
	}

}
