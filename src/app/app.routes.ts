import { Routes } from '@angular/router';
import { InputBindingComponent } from './input-binding.component';

export const routes: Routes = [
  {
    path: 'input-binding',
    children: [
      {
        path: ':id',
        component: InputBindingComponent,
      },
    ],
  },
];
