import * as React from 'react';

interface SparksProps {
  children?: React.ReactNode;
}

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

function useAnimation() {
  const refs = React.useRef(new Set<any>());
  const animations = React.useRef(new WeakMap());
  const [phase, setPhase] = React.useState<'entry' | 'exit'>('entry');

  const register = React.useCallback(() => {
    return {
      ref: (el: HTMLDivElement | null) => {
        if (el) {
          // eslint-disable-next-line no-console
          console.log('register');
          refs.current.add(el);
        }
      },
    };
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Play animation %c${phase}`, 'background: #000; color: #fff');

    let index = 0;

    refs.current.forEach(ref => {
      index++;
      const baseDelay = index * 80;

      switch (phase) {
        case 'entry': {
          let anims = animations.current.get(ref);

          anims?.forEach(animation => animation.cancel());
          anims = [];

          const translate = ref.animate(
            [
              {transform: 'translateY(calc(var(--particle-dir, -1) * 24px))'},
              {transform: 'translateY(0)'},
            ],
            {
              easing: 'cubic-bezier(0.1, 0, 0, 1)',
              duration: 1280 - baseDelay,
              delay: 120 + baseDelay,
              composite: 'add',
              fill: 'both',
            }
          );

          anims.push(translate);

          const scale = ref.animate(
            [{transform: 'scale(0)'}, {transform: 'scale(1)'}],
            {
              easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
              duration: 700,
              delay: baseDelay,
              composite: 'add',
              fill: 'both',
            }
          );

          anims.push(scale);

          const opacity = ref.animate([{opacity: 0}, {opacity: 1}], {
            easing: 'linear',
            duration: 260,
            delay: baseDelay,
            fill: 'both',
          });

          anims.push(opacity);

          const rotation = ref.animate([{transform: 'rotate(360deg)'}], {
            easing: 'linear',
            duration: 5600,
            iterations: Infinity,
            composite: 'add',
          });

          anims.push(rotation);
          animations.current.set(ref, anims);

          break;
        }

        case 'exit': {
          const anims = animations.current.get(ref);
          const scale = ref.animate([{transform: 'scale(0)'}], {
            easing: 'cubic-bezier(0.3, 0, 1, 0.8)',
            duration: 400,
            delay: 0,
            composite: 'add',
            fill: 'both',
          });

          anims.push(scale);

          const opacity = ref.animate([{opacity: 0}], {
            easing: 'linear',
            duration: 260,
            delay: 0,
            fill: 'forwards',
          });

          anims.push(opacity);

          break;
        }

        default:
          break;
      }
    });
  }, [phase]);

  return {register, phase, setPhase};
}

const Sparks = ({children}: SparksProps) => {
  const {register, setPhase} = useAnimation();

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
            color: 'var(--yellow-20)',
            top: '12px',
          }}
          size={16}
          {...register()}
        />
        <Particle
          style={{
            '--index': 1,
            gridColumn: '6 / span 1',
            color: 'var(--yellow-40)',
            top: '4px',
          }}
          size={28}
          {...register()}
        />
        <Particle
          style={{
            '--index': 5,
            gridColumn: '-2 / span 1',
            color: 'var(--yellow-50)',
            top: '12px',
          }}
          size={12}
          {...register()}
        />

        <Particle
          style={{
            '--index': 4,
            '--particle-dir': 1,
            gridColumn: '2 / span 1',
            gridRow: '3',
            alignSelf: 'self-end',
            color: 'var(--yellow-50)',
          }}
          size={40}
          {...register()}
        />
        <Particle
          style={{
            '--index': 2,
            '--particle-dir': 1,
            gridColumn: '-3 / span 1',
            gridRow: '3',
            alignSelf: 'self-end',
            color: 'var(--yellow-30)',
            bottom: '4px',
          }}
          size={24}
          {...register()}
        />
      </div>
    </div>
  );
};

Sparks.displayName = 'Sparks';
export default Sparks;
