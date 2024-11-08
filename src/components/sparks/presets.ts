import {AnimationConfig} from './animation';
import {ParticleProps} from './Particle';

const sparkAnimation: AnimationConfig = {
  entry: [
    {
      keyframes: [
        {
          transform:
            'translateY(calc(var(--particle-dir, -1) * var(--particle-offset, 24px)))',
        },
        {transform: 'translateY(0)'},
      ],
      options: {
        easing: 'cubic-bezier(0.1, 0, 0, 1)',
        duration: index => 1280 - (index % 4) * 70,
        delay: index => 120 + (index % 4) * 70,
        composite: 'add',
        fill: 'both',
      },
    },
    {
      keyframes: [{transform: 'scale(0)'}, {transform: 'scale(1)'}],
      options: {
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        duration: 700,
        delay: index => index * 60,
        composite: 'add',
        fill: 'both',
      },
    },
    {
      keyframes: [{opacity: 0}, {opacity: 1}],
      options: {
        easing: 'linear',
        duration: 260,
        delay: index => index * 60,
        fill: 'both',
      },
    },
    {
      keyframes: [
        {transform: 'rotate(calc(var(--rotation-dir, -1) * 360deg))'},
      ],
      options: {
        easing: 'linear',
        duration: 5600,
        iterations: Infinity,
        composite: 'add',
      },
    },
  ],
  exit: [
    {
      keyframes: [{transform: 'scale(0)'}],
      options: {
        easing: 'cubic-bezier(0.3, 0, 1, 0.8)',
        duration: 400,
        delay: 0,
        composite: 'add',
        fill: 'both',
      },
    },
    {
      keyframes: [{opacity: 0}],
      options: {
        easing: 'linear',
        duration: 260,
        delay: 0,
        fill: 'forwards',
      },
    },
  ],
};

const sparkAnimationReduced: AnimationConfig = {
  entry: [
    {
      keyframes: [
        {opacity: 0, offset: 0},
        {opacity: 1, offset: 0.125},
        {opacity: 1, offset: 0.5},
        {opacity: 0, offset: 0.625},
        {opacity: 0, offset: 1},
      ],
      options: {
        easing: 'linear',
        iterations: Infinity,
        duration: 4000,
        delay: index => index * 250,
        direction: 'normal',
        fill: 'both',
      },
    },
  ],
  exit: [
    {
      keyframes: [{opacity: 0}],
      options: {
        easing: 'linear',
        duration: 360,
        delay: 0,
        fill: 'forwards',
      },
    },
  ],
};

const heartAnimation: AnimationConfig = {
  entry: [
    {
      keyframes: [
        {
          transform:
            'translateY(calc(var(--particle-dir, -1) * var(--particle-offset, 24px)))',
        },
        {transform: 'translateY(0)'},
      ],
      options: {
        easing: 'cubic-bezier(0.1, 0, 0, 1)',
        duration: index => 1280 - (index % 4) * 70,
        delay: index => 120 + (index % 4) * 70,
        composite: 'add',
        fill: 'both',
      },
    },
    {
      keyframes: [{transform: 'scale(0)'}, {transform: 'scale(1)'}],
      options: {
        easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
        duration: 900,
        delay: index => index * 60,
        composite: 'add',
        fill: 'both',
      },
    },
    {
      keyframes: [{opacity: 0}, {opacity: 1}],
      options: {
        easing: 'linear',
        duration: 260,
        delay: index => index * 60,
        fill: 'both',
      },
    },
    {
      id: 'heart-loop',
      keyframes: [{transform: 'scale(0.75)'}],
      options: {
        easing: 'linear',
        duration: 700,
        delay: index => 700 + index * 100,
        direction: 'alternate',
        iterations: Infinity,
        composite: 'add',
      },
    },
  ],
  exit: [
    {
      keyframes: [{transform: 'scale(0)'}],
      options: {
        easing: 'cubic-bezier(0.3, 0, 1, 0.8)',
        duration: 400,
        delay: 0,
        composite: 'add',
        fill: 'both',
      },
    },
    {
      keyframes: [{opacity: 0}],
      options: {
        easing: 'linear',
        duration: 260,
        delay: 0,
        fill: 'forwards',
      },
    },
  ],
};

const heartAnimationReduced: AnimationConfig = {
  entry: [
    {
      keyframes: [
        {opacity: 0, offset: 0},
        {opacity: 1, offset: 0.125},
        {opacity: 1, offset: 0.5},
        {opacity: 0, offset: 0.625},
        {opacity: 0, offset: 1},
      ],
      options: {
        easing: 'linear',
        iterations: Infinity,
        duration: 4000,
        delay: index => index * 250,
        direction: 'normal',
        fill: 'both',
      },
    },
  ],
  exit: [
    {
      keyframes: [{opacity: 0}],
      options: {
        easing: 'linear',
        duration: 260,
        delay: 0,
        fill: 'forwards',
      },
    },
  ],
};

export const shapeAnimationMap: Record<
  // @ts-ignore TS2344
  ParticleProps['shape'],
  {default: AnimationConfig; reduced: AnimationConfig}
> = {
  spark: {
    default: sparkAnimation,
    reduced: sparkAnimationReduced,
  },
  heart: {
    default: heartAnimation,
    reduced: heartAnimationReduced,
  },
};

// @ts-ignore TS2344
export const shapeColorMap: Record<ParticleProps['shape'], string[]> = {
  spark: [
    'var(--yellow-20)',
    'var(--yellow-30)',
    'var(--yellow-40)',
    'var(--yellow-40)',
  ],
  heart: ['var(--red-20)', 'var(--red-30)', 'var(--red-40)', 'var(--red-50)'],
};

const layoutVariantL = [
  {
    style: {
      gridColumn: '1 / span 1',
      top: '12px',
    },
    colorIndex: 0,
    size: 16,
    animation: {
      index: 2,
      overrides: {
        'heart-loop': {
          keyframes: [{transform: 'scale(1.25)'}],
        },
      },
    },
  },
  {
    style: {
      gridColumn: '6 / span 1',
      top: '4px',
    },
    colorIndex: 2,
    size: 28,
    animation: {
      index: 0,
    },
  },
  {
    style: {
      gridColumn: '-2 / span 1',
      top: '12px',
    },
    colorIndex: 3,
    size: 12,
    animation: {
      index: 4,
      overrides: {
        'heart-loop': {
          keyframes: [{transform: 'scale(1.25)'}],
        },
      },
    },
  },
  {
    style: {
      '--particle-dir': 1,
      '--rotation-dir': 1,
      gridColumn: '2 / span 1',
      gridRow: '2',
      alignSelf: 'self-end',
    },
    colorIndex: 3,
    size: 40,
    animation: {
      index: 3,
    },
  },
  {
    style: {
      '--particle-dir': 1,
      '--rotation-dir': 1,
      gridColumn: '-3 / span 1',
      gridRow: '2',
      alignSelf: 'self-end',
      bottom: '4px',
    },
    colorIndex: 1,
    size: 24,
    animation: {
      index: 1,
      overrides: {
        'heart-loop': {
          keyframes: [{transform: 'scale(1.25)'}],
        },
      },
    },
  },
];

const layoutVariantM = [
  {
    style: {
      left: '13px',
      top: '7px',
    },
    colorIndex: 0,
    size: 14,
    animation: {
      index: 2,
      overrides: {
        'heart-loop': {
          keyframes: [{transform: 'scale(1.25)'}],
        },
      },
    },
  },
  {
    style: {
      '--rotation-dir': 1,
      right: '0px',
      top: '2px',
    },
    colorIndex: 2,
    size: 24,
    animation: {
      index: 0,
    },
  },
  {
    style: {
      '--particle-dir': 1,
      '--rotation-dir': 1,
      bottom: '0',
      left: '0',
      alignSelf: 'self-end',
    },
    colorIndex: 3,
    size: 28,
    animation: {
      index: 3,
    },
  },
  {
    style: {
      '--particle-dir': 1,
      bottom: '4px',
      right: '8px',
    },
    colorIndex: 1,
    size: 20,
    animation: {
      index: 1,
      overrides: {
        'heart-loop': {
          keyframes: [{transform: 'scale(1.25)'}],
        },
      },
    },
  },
];

const layoutVariantS = [
  {
    style: {
      '--particle-offset': '12px',
      left: '4px',
      top: '3px',
    },
    colorIndex: 0,
    size: 14,
    animation: {
      index: 2,
      overrides: {
        'heart-loop': {
          keyframes: [{transform: 'scale(1.25)'}],
        },
      },
    },
  },
  {
    style: {
      '--particle-offset': '12px',
      right: '0px',
      top: '2px',
    },
    colorIndex: 2,
    size: 20,
    animation: {
      index: 0,
    },
  },
  {
    style: {
      '--particle-dir': 1,
      '--particle-offset': '12px',
      '--rotation-dir': 1,
      gridColumn: '5 / span 1',
      alignSelf: 'self-end',
      bottom: '-4px',
    },
    colorIndex: 3,
    size: 24,
    animation: {
      index: 1,
    },
  },
];

export const variants = {
  l: layoutVariantL,
  m: layoutVariantM,
  s: layoutVariantS,
} as const;
