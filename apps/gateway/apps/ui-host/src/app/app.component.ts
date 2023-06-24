import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'deepq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ui-host';

  constructor(private router: Router) {}

  ngOnInit() {
    // Queue the navigation after initialNavigation blocking is completed
    setTimeout(() => {
      this.router.navigateByUrl('kiosk');
    });
  }
}
