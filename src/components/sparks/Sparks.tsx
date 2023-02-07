import * as React from 'react';

interface SparksProps {
  children?: React.ReactNode;
}

const Particle = React.forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      ref={ref}
      className="sg-sparks__particle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>spark</title>
      <path
        fill="var(--yellow-40)"
        fillRule="evenodd"
        d="M256 64c11.782075 0 21.333333 9.5512587 21.333333 21.3333333 0 81.6497777 65.528321 147.9945957 146.863834 149.3133267l2.4695.020007C438.448741 234.666667 448 244.217925 448 256c0 11.782075-9.551259 21.333333-21.333333 21.333333-81.649778 0-147.994596 65.528321-149.313327 146.863834l-.020007 2.4695C277.333333 438.448741 267.782075 448 256 448c-11.782075 0-21.333333-9.551259-21.333333-21.333333 0-82.474523-66.858811-149.333334-149.3333337-149.333334l-.3527856-.002858C73.3611886 277.142085 64 267.664254 64 256c0-11.782075 9.5512587-21.333333 21.3333333-21.333333 82.4745227 0 149.3333337-66.858811 149.3333337-149.3333337l.002858-.3527856C234.857915 73.3611886 244.335746 64 256 64z"
      />
    </svg>
  );
});

const Sparks = ({children}: SparksProps) => {
  const ref = React.useRef<SVGSVGElement>(null);
  const animations = React.useRef<any>([]);
  const [phase, setPhase] = React.useState('entry');

  React.useEffect(() => {
    if (!ref) {
      return;
    }

    // eslint-disable-next-line no-console
    console.log(`Play animation %c${phase}`, 'background: #000; color: #fff');

    switch (phase) {
      case 'entry': {
        animations.current.forEach(animation => animation.cancel());
        animations.current = [];

        const translate = ref.current.animate(
          [{transform: 'translateY(-24px)'}, {transform: 'translateY(0)'}],
          {
            easing: 'cubic-bezier(0.1, 0, 0, 1)',
            duration: 1280,
            delay: 120,
            composite: 'add',
            fill: 'both',
          }
        );

        animations.current.push(translate);

        const scale = ref.current.animate(
          [{transform: 'scale(0)'}, {transform: 'scale(1)'}],
          {
            easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
            duration: 700,
            delay: 0,
            composite: 'add',
            fill: 'both',
          }
        );

        animations.current.push(scale);

        const opacity = ref.current.animate([{opacity: 0}, {opacity: 1}], {
          easing: 'linear',
          duration: 260,
          delay: 0,
          fill: 'both',
        });

        animations.current.push(opacity);

        const rotation = ref.current.animate([{transform: 'rotate(90deg)'}], {
          easing: 'linear',
          duration: 1400,
          iterations: Infinity,
          composite: 'add',
        });

        animations.current.push(rotation);
        break;
      }

      case 'exit': {
        const scale = ref.current.animate([{transform: 'scale(0)'}], {
          easing: 'cubic-bezier(0.35, 0, 0.1, 1)',
          duration: 700,
          delay: 0,
          composite: 'add',
          fill: 'both',
        });

        animations.current.push(scale);

        const opacity = ref.current.animate([{opacity: 0}], {
          easing: 'linear',
          duration: 260,
          delay: 0,
          fill: 'forwards',
        });

        animations.current.push(opacity);

        break;
      }

      default:
        break;
    }
  }, [phase]);

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
        <Particle ref={ref} />
      </div>
    </div>
  );
};

Sparks.displayName = 'Sparks';
export default Sparks;
