import { Component, Input } from '@angular/core';
import { Spot } from '../../core/models/spot.model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {

  @Input()
  row!: {
    spot: Spot;
  };
}
