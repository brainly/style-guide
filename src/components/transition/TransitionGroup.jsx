// @flow strict

import * as React from 'react';

type ObserverType<T> = (payload: T) => void;

type ObservableType<T: {...}> = $ReadOnly<{
  subscribe: (observer: ObserverType<T>) => void,
  unsubscribe: (observer: ObserverType<T>) => void,
  notify: (payload: T) => void,
}>;

type TransformationChangePayloadType = $ReadOnly<{
  container: HTMLElement,
}>;

type ContextType = $ReadOnly<{
  transformationChange: ObservableType<TransformationChangePayloadType>,
}>;

const TransitionContext = React.createContext<ContextType | void>();

export function TransitionGroup({
  changeKey,
  children,
}: {
  /**
   * Informs that something has changed
   * and the group should react to it.
   */
  changeKey: string | number | boolean,
  children: React.Node,
}) {
  const containerRef = React.useRef(null);
  const [transformationChange] = React.useState(() =>
    createObservable<TransformationChangePayloadType>()
  );

  React.useLayoutEffect(() => {
    const container = containerRef.current;

    if (container) {
      transformationChange.notify({container});
    }
  }, [changeKey, transformationChange]);

  return (
    <TransitionContext.Provider value={{transformationChange}}>
      <div ref={containerRef}>{children}</div>
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  const contextValue = React.useContext(TransitionContext);

  if (!contextValue) {
    throw new Error(
      'could not find Transition context; please ensure the component is wrapped in a <TransitionGroup>'
    );
  }

  return contextValue;
}

function createObservable<T: {...}>(): ObservableType<T> {
  let observers = [];

  return {
    subscribe(observer) {
      observers.push(observer);
    },
    unsubscribe(observer) {
      observers = observers.filter(a => a !== observer);
    },
    notify(payload) {
      observers.forEach(observer => observer(payload));
    },
  };
}
