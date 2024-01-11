import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-toggle-controlled',
  standalone: true,
  template: `
    <button class="button-85" (click)="toggle()">
      {{ content() }}
      <span>
        <ng-content></ng-content>
      </span>
    </button>
  `,
})
export class ToggleControlledComponent {
  isOn = input.required<boolean>();
  @Output()
  isOnChange = new EventEmitter<boolean>();
  content = computed(() => (this.isOn() ? 'Turn off' : 'Turn on'));

  toggle() {
    this.isOnChange.emit(!this.isOn());
  }
}
