import { Component } from '@angular/core';
import { Spot } from '../../core/models/spot.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  readonly rows: { spot: Spot }[] = [
    {
      spot: {
        id: 'Some 1 UUID',
        title: 'Some 1 title',
        queueSize: 111,
        lastCode: '1111',
      },
    },
    {
      spot: {
        id: 'Some 2 UUID',
        title: 'Some 2 title',
        queueSize: 222,
        lastCode: '2222',
      },
    },
    {
      spot: {
        id: 'Some 3 UUID',
        title: 'Some 3 title',
        queueSize: 333,
        lastCode: '3333',
      },
    },
    {
      spot: {
        id: 'Some 4 UUID',
        title: 'Some 4 title',
        queueSize: 444,
        lastCode: '4444',
      },
    },
  ];
}
