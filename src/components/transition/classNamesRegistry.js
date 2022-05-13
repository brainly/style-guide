// @flow strict

export interface ClassNamesRegistryType {
  register(key: string, value: string): void;
  toString(): string;
}

export function createClassNamesRegistry(): ClassNamesRegistryType {
  const registry: {[key: string]: string, ...} = {};

  return {
    register(key: string, value: string) {
      registry[key] = value;
    },
    toString(): string {
      return Object.keys(registry)
        .map(key => registry[key])
        .join(' ')
        .trim();
    },
  };
}
