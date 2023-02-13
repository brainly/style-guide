import * as React from 'react';

interface ParticleCSSProperties extends React.CSSProperties {
  '--particle-dir'?: number;
  '--index'?: number;
}

const shapes = {
  heart: (
    <path
      fill="currentColor"
      d="M281.905 416.674c-14.635 13.398-37.094 13.313-51.628-.194l-2.112-1.935C127.403 322.604 61.573 262.406 64.069 187.305a105.899 105.899 0 0 1 44.91-83.038c47.188-31.777 110.766-22.57 147.016 21.292 36.199-43.95 99.85-53.169 147.015-21.292a105.897 105.897 0 0 1 44.91 83.038c2.689 75.101-63.335 135.299-164.095 227.627l-1.92 1.742z"
      fillRule="nonzero"
    />
  ),
  spark: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M256 64c11.782075 0 21.333333 9.5512587 21.333333 21.3333333 0 81.6497777 65.528321 147.9945957 146.863834 149.3133267l2.4695.020007C438.448741 234.666667 448 244.217925 448 256c0 11.782075-9.551259 21.333333-21.333333 21.333333-81.649778 0-147.994596 65.528321-149.313327 146.863834l-.020007 2.4695C277.333333 438.448741 267.782075 448 256 448c-11.782075 0-21.333333-9.551259-21.333333-21.333333 0-82.474523-66.858811-149.333334-149.3333337-149.333334l-.3527856-.002858C73.3611886 277.142085 64 267.664254 64 256c0-11.782075 9.5512587-21.333333 21.3333333-21.333333 82.4745227 0 149.3333337-66.858811 149.3333337-149.3333337l.002858-.3527856C234.857915 73.3611886 244.335746 64 256 64z"
    />
  ),
} as const;

interface ParticleProps {
  style?: ParticleCSSProperties;
  size?: number;
  shape?: 'spark' | 'heart';
}

const Particle = React.forwardRef<HTMLDivElement, ParticleProps>(
  ({size, shape = 'spark', style}, ref) => {
    return (
      <div ref={ref} className="sg-sparks__particle" style={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size ?? '20'}
          height={size ?? '20'}
          viewBox="0 0 512 512"
        >
          {shapes[shape]}
        </svg>
      </div>
    );
  }
);

interface KeyframeAnimationOptionsEx
  extends Omit<KeyframeAnimationOptions, 'delay' | 'duration'> {
  delay?: number | ((index: number) => number);
  duration?: number | string | ((index: number) => number | string);
}

interface AnimationWithOptions {
  keyframes: PropertyIndexedKeyframes | Keyframe[];
  options?: KeyframeAnimationOptionsEx;
}

interface AnimationConfig {
  entry: AnimationWithOptions[];
  exit: AnimationWithOptions[];
}

interface RegisterOptions {
  index?: number;
}

function useAnimation(config: AnimationConfig) {
  const refs = React.useRef(new Set<any>());
  const parameters = React.useRef(new WeakMap());
  const animations = React.useRef(new WeakMap());
  const [phase, setPhase] = React.useState<'entry' | 'exit'>('entry');
  const configRef = React.useRef(config);

  // we only need the most updated value. Equivalent of using useEffectEvent
  configRef.current = config;

  const register = React.useCallback((options?: RegisterOptions) => {
    return {
      ref: (el: HTMLDivElement | null) => {
        if (el) {
          // eslint-disable-next-line no-console
          console.log('register');
          options ??= {index: refs.current.size};
          parameters.current.set(el, options);
          refs.current.add(el);
        }
      },
    };
  }, []);

  React.useEffect(() => {
    const elements = refs.current;

    return () => {
      // TODO(coderitual): do proper cleanup and check for memory leaks
      elements.clear();
    };
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Play animation %c${phase}`, 'background: #000; color: #fff');

    refs.current.forEach(ref => {
      const {index} = parameters.current.get(ref);

      switch (phase) {
        case 'entry': {
          let anims = animations.current.get(ref);

          anims?.forEach(animation => animation.cancel());
          anims = [];

          configRef.current.entry?.forEach(keyframesConfig => {
            const {keyframes, options = {}} = keyframesConfig;

            const animationOptions = {
              ...options,
              delay:
                typeof options.delay === 'function'
                  ? options.delay(index)
                  : options.delay,
              duration:
                typeof options.duration === 'function'
                  ? options.duration(index)
                  : options.duration,
            };

            const anim = ref.animate(keyframes, animationOptions);

            anims.push(anim);
          });

          animations.current.set(ref, anims);

          break;
        }

        case 'exit': {
          const anims = animations.current.get(ref);

          configRef.current.exit?.forEach(keyframesConfig => {
            const {keyframes, options = {}} = keyframesConfig;

            const animationOptions = {
              ...options,
              delay:
                typeof options.delay === 'function'
                  ? options.delay(index)
                  : options.delay,
              duration:
                typeof options.duration === 'function'
                  ? options.duration(index)
                  : options.duration,
            };

            const anim = ref.animate(keyframes, animationOptions);

            anims.push(anim);
          });

          break;
        }

        default:
          break;
      }
    });
  }, [phase]);

  return {register, phase, setPhase};
}

const sparkAnimationConfig: AnimationConfig = {
  entry: [
    {
      keyframes: [
        {transform: 'translateY(calc(var(--particle-dir, -1) * 24px))'},
        {transform: 'translateY(0)'},
      ],
      options: {
        easing: 'cubic-bezier(0.1, 0, 0, 1)',
        duration: index => 1280 - (index % 4) * 80,
        delay: index => 120 + (index % 4) * 80,
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
      keyframes: [{transform: 'rotate(360deg)'}],
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
      } as const,
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

const heartAnimationConfig: AnimationConfig = {
  entry: [
    {
      keyframes: [
        {transform: 'translateY(calc(var(--particle-dir, -1) * 24px))'},
        {transform: 'translateY(0)'},
      ],
      options: {
        easing: 'cubic-bezier(0.1, 0, 0, 1)',
        duration: index => 1280 - (index % 4) * 80,
        delay: index => 120 + (index % 4) * 80,
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
      keyframes: [{transform: 'rotate(360deg)'}],
      options: {
        easing: 'linear',
        duration: 700,
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

const shapeAnimationMap: Record<SparksProps['shape'], AnimationConfig> = {
  spark: sparkAnimationConfig,
  heart: heartAnimationConfig,
};

const shapeColorMap: Record<SparksProps['shape'], string[]> = {
  spark: [
    'var(--yellow-20)',
    'var(--yellow-30)',
    'var(--yellow-40)',
    'var(--yellow-50)',
  ],
  heart: ['var(--red-20)', 'var(--red-30)', 'var(--red-40)', 'var(--red-50)'],
};

interface SparksProps {
  children?: React.ReactNode;
  shape?: 'spark' | 'heart';
}

const Sparks = ({children, shape = 'spark'}: SparksProps) => {
  const animationConfig = shapeAnimationMap[shape];
  const {register, setPhase} = useAnimation(animationConfig);

  const shapeColor = shapeColorMap[shape];

  const handlMouseEnter = () => {
    setPhase('entry');
  };
  const handlMouseLeave = () => {
    setPhase('exit');
  };

  return (
    <div
      className="sg-sparks"
      onMouseEnter={handlMouseEnter}
      onMouseLeave={handlMouseLeave}
    >
      {children}
      <div className="sg-sparks__container">
        <Particle
          style={{
            '--index': 3,
            gridColumn: '1 / span 1',
            color: shapeColor[0],
            top: '12px',
          }}
          size={16}
          shape={shape}
          {...register({index: 2})}
        />
        <Particle
          style={{
            '--index': 1,
            gridColumn: '6 / span 1',
            color: shapeColor[2],
            top: '4px',
          }}
          size={28}
          shape={shape}
          {...register({index: 0})}
        />
        <Particle
          style={{
            '--index': 5,
            gridColumn: '-2 / span 1',
            color: shapeColor[3],
            top: '12px',
          }}
          size={12}
          shape={shape}
          {...register({index: 4})}
        />

        <Particle
          style={{
            '--index': 4,
            '--particle-dir': 1,
            gridColumn: '2 / span 1',
            gridRow: '3',
            alignSelf: 'self-end',
            color: shapeColor[3],
          }}
          size={40}
          shape={shape}
          {...register({index: 3})}
        />
        <Particle
          style={{
            '--index': 2,
            '--particle-dir': 1,
            gridColumn: '-3 / span 1',
            gridRow: '3',
            alignSelf: 'self-end',
            color: shapeColor[1],
            bottom: '4px',
          }}
          size={24}
          {...register({index: 1})}
        />
      </div>
    </div>
  );
};

Sparks.displayName = 'Sparks';
export default Sparks;
