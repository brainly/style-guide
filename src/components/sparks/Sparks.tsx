import * as React from 'react';

interface SparksProps {
  children?: React.ReactNode;
}

const Particle = React.forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="sg-sparks__particle"
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

  React.useEffect(() => {
    if (ref) {
      ref.current.animate([{transform: 'rotate(90deg)'}], {
        easing: 'linear',
        duration: 1400,
        iterations: Infinity,
      });
    }
  }, []);

  return (
    <div className="sg-sparks">
      {children}
      <div className="sg-sparks__container">
        <Particle ref={ref} />
      </div>
    </div>
  );
};

Sparks.displayName = 'Sparks';
export default Sparks;
