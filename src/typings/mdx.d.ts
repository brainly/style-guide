/*
Declaration is emtpy until this there is an implementation for type annotation for all exports in the module
https://github.com/microsoft/TypeScript/issues/38511

Alternate proposal:

declare module '*.stories.mdx' {
  interface CSF {
    (props): JSX.Element;
    includeStories: string[];
    [key: string]: any;
  }

  const MDXComponent: CSF;

  export default MDXComponent;
}
*/

declare module '*.stories.mdx';
