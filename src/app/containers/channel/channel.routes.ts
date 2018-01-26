import { Routes } from '@angular/router';
import { ChannelComponent } from './channel.component';

import { channelDetailsRoutes } from './channel-details/channel-details.routes';

export const channelRoutes: Routes = [
    {
        path: 'channel',
        component: ChannelComponent,
        children: [
            ...channelDetailsRoutes
        ],
        pathMatch: 'full'
    }
];