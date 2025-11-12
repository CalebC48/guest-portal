import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaptivePortalComponent } from './captive-portal/captive-portal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CaptivePortalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
