import * as React from 'react';

export interface ParticleCSSProperties extends React.CSSProperties {
  '--particle-dir'?: number;
  '--particle-offset'?: number;
  '--index'?: number;
}

export interface ParticleProps {
  style?: ParticleCSSProperties;
  size?: number;
  shape?: 'spark' | 'heart';
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

const Particle = React.forwardRef<HTMLDivElement, ParticleProps>(
  ({size = 20, shape = 'spark', style}, ref) => {
    return (
      <div ref={ref} className="sg-sparks__particle" style={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          {shapes[shape]}
        </svg>
      </div>
    );
  }
);

Particle.displayName = 'Particle';
export default Particle;
