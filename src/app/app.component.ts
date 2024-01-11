import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleComponent } from './toggle.component';
import { ToggleControlledComponent } from './toggle-controlled.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleComponent, ToggleControlledComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular v17.1.0-rc.0';
  isOn = true;
  isOnControlled = true;
}
