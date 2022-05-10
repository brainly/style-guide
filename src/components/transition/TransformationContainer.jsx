// @flow strict

/* eslint-disable max-len */
import * as React from 'react';

type TransformationChangePayloadType = $ReadOnly<{
  container: HTMLElement,
}>;

const TransformationContext = React.createContext<{
  transformationChange: ObservableType<TransformationChangePayloadType>,
} | void>();

export function TransformationContainer({
  stateKey,
  children,
}: {
  /**
   * Indicates that some state has changed and will affect
   * the transformation of components inside the container,
   * so the associated custom hooks should respond to it.
   */
  stateKey: string | number | boolean,
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
  }, [transformationChange, stateKey]);

  return (
    <TransformationContext.Provider value={{transformationChange}}>
      <div ref={containerRef}>{children}</div>
    </TransformationContext.Provider>
  );
}

const undefinedContextError = `could not find a transformation context. Please ensure that associated components are wrapped with a <TransformationContainer />:

  <TransformationContainer stateKey={...}>
    <List>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </List>
  </TransformationContainer>

  /* where: */

  function ListItem() {
    const elementRef = React.useRef();
    const effect = useTransformationEffect({
      elementRef,
    });

    return (
      <Transition effect={effect}>
        <div ref={elementRef} />
      </Transition>
    );
  }
`;

export function useTransformationContext() {
  const contextValue = React.useContext(TransformationContext);

  if (contextValue === undefined) {
    throw new Error(undefinedContextError);
  }

  return contextValue;
}

type ObserverType<T: {...}> = (payload: T) => void;
type ObservableType<T: {...}> = $ReadOnly<{
  subscribe: (observer: ObserverType<T>) => void,
  unsubscribe: (observer: ObserverType<T>) => void,
  notify: (payload: T) => void,
}>;

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
