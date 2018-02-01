import { Routes } from '@angular/router';
import { ChannelDetailsComponent } from './channel-details.component';

export const channelDetailsRoutes: Routes = [
    {
        path: ':channelId',
        component: ChannelDetailsComponent
    }
];
