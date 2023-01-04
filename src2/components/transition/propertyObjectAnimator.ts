import type {PropertyObjectType} from './Transition';
export interface PropertyObjectAnimatorType {
  animate(
    element: HTMLElement,
    from?: PropertyObjectType,
    to?: PropertyObjectType,
    speed?: number
  ): void;
  apply(element: HTMLElement, props?: PropertyObjectType): void;
  cleanup(element: HTMLElement): void;
  propertyTransitionEnd(): void;
  onFinish(callback: () => void): void;
}