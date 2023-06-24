import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { PanelComponent } from '../components/panel/panel.component';
import { RowComponent } from '../components/row/row.component';

@NgModule({
  declarations: [RemoteEntryComponent, PanelComponent, RowComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
