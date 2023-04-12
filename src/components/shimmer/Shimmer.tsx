import classNames from 'classnames';
import React from 'react';

export type ShimmerPropsType = {
  /**
   * Optional string. Type of effect.
   * @example <Shimmer id="main"></Shimmer>
   */
  type?: 'full';
  /**
   * Optional string. You can pass id of other shimmer to sync with.
   * @example <Shimmer id="main"></Shimmer>
   */
  idSync?: string;
  /**
   * Optional string. If you set id , you can pass it to idSync prop of other shimmer to sync.
   * @example <Shimmer id="main"></Shimmer>
   */
  id?: string;
  /**
   * Optional boolean. It syncs effect globally.
   * @example <Shimmer globalSync><Avatar /></Shimmer>
   */
  globalSync?: boolean;
  /**
   * Optional boolean. Turns on shimmer effect
   * @example <Shimmer active><Avatar /></Shimmer>
   */
  active?: boolean;
  /**
   * Optional string. background-image to be applied to effect layer
   * @example <Shimmer image="linear-gradient(90deg,
        white 0%,
        black 50%,
        white 100%)">
          <Avatar />
        </Shimmer>
   */
  image?: string;
  /**
   * Optional string. background-blend-mode to be applied to effect layer
   * @example <Shimmer blendMode="difference"><Avatar /></Shimmer>
   */
  blendMode?:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity';
  /**
   * Optional string. Controls animation direction
   * @example <Shimmer direction="vertical"><Avatar /></Shimmer>
   */
  direction?: 'horizontal' | 'vertical' | 'diagonal';
};

const GLOBAL_SHIMMER_ORIGIN_ID = 'shimmer-origin';

export const Shimmer: React.FunctionComponent<ShimmerPropsType> = ({
  id,
  type = 'full',
  image,
  idSync,
  globalSync = true,
  children,
  active = false,
  blendMode,
  direction = 'horizontal',
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
      containerRef.current.style.display = 'inline-flex';
    }
  }, [containerRef]);

  // setup animation
  React.useEffect(() => {
    const height = `${window.outerHeight}px`;
    const width = `${window.outerWidth}px`;

    const KEYFRAMES_BY_DIRECTON = {
      horizontal: [
        {
          backgroundPositionX: `-${width}`,
        },
        {
          backgroundPositionX: width,
          offset: 0.33,
        },
        {
          backgroundPositionX: width,
          offset: 0.5,
        },
        {
          backgroundPositionX: `-${width}`,
          offset: 0.83,
        },
        {
          backgroundPositionX: `-${width}`,
          offset: 1,
        },
      ],
      vertical: [
        {
          backgroundPositionY: `-${height}`,
        },
        {
          backgroundPositionY: height,
          offset: 0.33,
        },
        {
          backgroundPositionY: height,
          offset: 0.5,
        },
        {
          backgroundPositionY: `-${height}`,
          offset: 0.83,
        },
        {
          backgroundPositionY: `-${height}`,
          offset: 1,
        },
      ],
      diagonal: [
        {
          backgroundPositionX: `-${width}`,
          backgroundPositionY: `-${height}`,
        },
        {
          backgroundPositionX: width,
          backgroundPositionY: height,
          offset: 0.33,
        },
        {
          backgroundPositionX: width,
          backgroundPositionY: height,
          offset: 0.5,
        },
        {
          backgroundPositionX: `-${width}`,
          backgroundPositionY: `-${height}`,
          offset: 0.83,
        },
        {
          backgroundPositionX: `-${width}`,
          backgroundPositionY: `-${height}`,
          offset: 1,
        },
      ],
    };
    const keyFrames = new KeyframeEffect(
      effectRef.current,
      KEYFRAMES_BY_DIRECTON[direction],
      {
        duration: 12000,
        iterations: Infinity,
      }
    );
    const animation = new Animation(keyFrames, document.timeline);

    let synced = false;

    // sync
    if (idSync) {
      const customShimmerOrigin = document
        .getAnimations()
        .find(animation => animation.id === idSync);

      if (customShimmerOrigin) {
        animation.startTime = customShimmerOrigin.startTime;
        synced = true;
      }
    } else if (globalSync) {
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
  }, [containerRef, idSync, id, globalSync, direction]);

  // play animation
  React.useEffect(() => {
    if (animationRef.current) {
      if (active) {
        if (idSync) {
          const customShimmerOrigin = document
            .getAnimations()
            .find(animation => animation.id === idSync);

          if (customShimmerOrigin) {
            animationRef.current.startTime = customShimmerOrigin.startTime;
          }
        } else if (globalSync) {
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
  }, [active, animationRef, globalSync, idSync]);

  return (
    <div className="shimmer" ref={containerRef}>
      {children}
      {type === 'full' ? (
        <span
          ref={effectRef}
          className={classNames(
            'shimmer-effect',
            'shimmer-effect--active',
            `shimmer-effect--${direction}`,
            {
              'shimmer-effect--fill': !image,
            }
          )}
          style={{
            backgroundImage: image,
            mixBlendMode: blendMode,
          }}
        />
      ) : null}
    </div>
  );
};
