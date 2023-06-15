import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'kiosk',
    loadChildren: () =>
      loadRemoteModule('ticket-apps-kiosk', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
