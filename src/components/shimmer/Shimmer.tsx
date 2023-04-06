import React from 'react';

export type ShimmerPropsType = {
  type?: 'full' | 'edge';
  origin?: string;
  id?: string;
  detached?: boolean;
  active?: boolean;
};

const GLOBAL_SHIMMER_ORIGIN_ID = 'shimmer-origin';

export const Shimmer: React.FunctionComponent<ShimmerPropsType> = ({
  id,
  type = 'full',
  origin,
  detached = false,
  children,
  active = false,
}) => {
  const containerRef = React.useRef<HTMLDivElement>();
  const effectRef = React.useRef<HTMLSpanElement>();
  const animationRef = React.useRef<Animation>();

  // copy styles from child to restrict same painting area
  React.useEffect(() => {
    if (containerRef.current) {
      const computedStyle = window.getComputedStyle(
        containerRef.current.firstElementChild
      );

      containerRef.current.style.borderRadius = computedStyle.borderRadius;
      containerRef.current.style.clipPath = computedStyle.clipPath;
      containerRef.current.style.display = 'inline-block';
    }
  }, [containerRef]);

  // setup animation
  React.useEffect(() => {
    const keyFrames = new KeyframeEffect(
      effectRef.current,
      [
        {
          backgroundPositionX: '-1000px',
        },
        {
          backgroundPositionX: '1000px',
          offset: 0.33,
        },
        {
          backgroundPositionX: '1000px',
          offset: 0.5,
        },
        {
          backgroundPositionX: '-1000px',
          offset: 0.83,
        },
        {
          backgroundPositionX: '-1000px',
          offset: 1,
        },
      ],
      {
        duration: 9000,
        iterations: Infinity,
      }
    );
    const animation = new Animation(keyFrames, document.timeline);

    let synced = false;

    // sync
    if (origin) {
      const customShimmerOrigin = document
        .getAnimations()
        .find(animation => animation.id === origin);

      if (customShimmerOrigin) {
        animation.startTime = customShimmerOrigin.startTime;
        synced = true;
      }
    } else if (!detached) {
      const globalShimmerOrigin = document
        .getAnimations()
        .find(animation => animation.id === GLOBAL_SHIMMER_ORIGIN_ID);

      if (globalShimmerOrigin) {
        animation.startTime = globalShimmerOrigin.startTime;
        synced = true;
      }
    }

    if (id) {
      animation.id = id;
    } else if (!synced) {
      animation.id = GLOBAL_SHIMMER_ORIGIN_ID;
    }

    animationRef.current = animation;
  }, [containerRef, origin, id, detached]);

  // play animation
  React.useEffect(() => {
    if (animationRef.current) {
      if (active) {
        if (origin) {
          const customShimmerOrigin = document
            .getAnimations()
            .find(animation => animation.id === origin);

          if (customShimmerOrigin) {
            animationRef.current.startTime = customShimmerOrigin.startTime;
          }
        } else if (!detached) {
          const globalShimmerOrigin = document
            .getAnimations()
            .find(animation => animation.id === GLOBAL_SHIMMER_ORIGIN_ID);

          if (globalShimmerOrigin) {
            animationRef.current.startTime = globalShimmerOrigin.startTime;
          }
        }
        animationRef.current.play();
      } else {
        animationRef.current.pause();
      }
    }
  }, [active, animationRef, detached, origin]);

  return (
    <div className="shimmer" ref={containerRef}>
      {children}
      {type === 'full' ? (
        <span
          ref={effectRef}
          className="shimmer-effect shimmer-effect--active shimmer-effect--full"
        />
      ) : null}
    </div>
  );
};
