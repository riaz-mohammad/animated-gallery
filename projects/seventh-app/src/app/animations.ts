import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';


export const animations = [
  trigger('startButton', [
    transition(':leave', [
      animate('400ms', style({ opacity: 0, transform: 'scale(0)' })),
    ]),
  ]),

  trigger('firstSlide', [
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),

    transition(':enter', [
      style({ opacity: 0, transform: 'scale(2)' }),
      animate('400ms'),
    ]),

    transition(
      'true => false',
      [animate('400ms', style({ left: '{{leave}}' }))],
      { params: { leave: '0%' } }
    ),

    transition(
      'false => true',
      [style({ left: '{{enter}}' }), animate('400ms')],
      { params: { enter: '0%' } }
    ),
  ]),

  trigger('secondSlide', [
    state('false', style({ opacity: 1 })),
    state('true', style({ opacity: 0 })),

    transition(
      'false => true',
      [animate('400ms', style({ left: '{{leave}}' }))],
      { params: { leave: '0%' } }
    ),

    transition(
      'true => false',
      [style({ left: '{{enter}}' }), animate('400ms')],
      { params: { enter: '0%' } }
    ),
  ]),

  trigger('leftArrow', [
    transition(':enter', [
      style({ opacity: 0, left: '50%' }),
      animate('400ms 200ms'),
    ]),
  ]),

  trigger('rightArrow', [
    transition(':enter', [
      style({ opacity: 0, right: '50%' }),
      animate('400ms 200ms'),
    ]),
  ]),

  trigger('items', [
    transition(':enter', [
      query(
        'app-item',
        [
          style({ transform: 'scale(1.8)', opacity: 0 }),
          stagger('100ms', [
            animate(
              '300ms 800ms',
              style({ transform: 'scale(1)', opacity: 1 })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]),
];

 
  