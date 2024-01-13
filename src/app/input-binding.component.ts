import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  template: `
    <h2>Routed Component Input Binding</h2>
    <p>
      This component is rendered via the router and receives data from the route
      param.
    </p>
    <p>Here is the data from the route param: {{ id() }}</p>
  `,
})
export class InputBindingComponent {
  id = input.required<string>();
}
