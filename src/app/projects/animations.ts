import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

  export const rotateImg = trigger('rotatedState', [
    state('default', style({ transform: 'rotate(0)' })),
    state('rotated', style({ transform: 'rotate(-180deg)' })),
    transition('rotated => default', animate('500ms ease-out')),
    transition('default => rotated', animate('500ms ease-in'))
])