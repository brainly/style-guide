declare module '*.stories.mdx' {
  interface CSF {
    (props): JSX.Element;
    includeStories: string[];
    [key: string]: any;
  }

  const MDXComponent: CSF;

  export default MDXComponent;
}
