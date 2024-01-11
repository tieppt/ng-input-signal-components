import {
  Component,
  EventEmitter,
  Output,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-toggle',
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
export class ToggleComponent {
  isOn = input.required<boolean>();
  @Output()
  isOnChange = new EventEmitter<boolean>();
  state = signal(false);
  content = computed(() => (this.state() ? 'Turn off' : 'Turn on'));

  constructor() {
    effect(
      () => {
        this.state.set(this.isOn());
      },
      { allowSignalWrites: true }
    );
  }

  toggle() {
    this.isOnChange.emit(!this.isOn());
    this.state.update((s) => !s);
  }
}
