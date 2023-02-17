import * as React from 'react';
import cx from 'classnames';
import {useAnimation} from './animation';
import {shapeAnimationMap, shapeColorMap, variants} from './presets';
import Particle from './Particle';

interface SparksProps {
  children?: React.ReactNode;
  shape?: 'spark' | 'heart';
  variant?: 's' | 'm' | 'l';
  active?: boolean;
  duration?: number;
  delay?: number;
  iterationCount?: number;
}

const Sparks = ({
  children,
  shape = 'heart',
  variant = 's',
  active = false,
  duration = 6000,
  delay = 500,
  iterationCount = 1,
}: SparksProps) => {
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
      className={cx('sg-sparks', {'sg-sparks--s': variant === 's'})}
      onMouseEnter={handlMouseEnter}
      onMouseLeave={handlMouseLeave}
    >
      {children}
      <div className="sg-sparks__container">
        {variants[variant].map((particle, index) => (
          <Particle
            key={index}
            shape={shape}
            {...particle}
            style={{...particle.style, color: shapeColor[particle.colorIndex]}}
            {...register(particle.register)}
          />
        ))}
      </div>
    </div>
  );
};

Sparks.displayName = 'Sparks';
export default Sparks;
