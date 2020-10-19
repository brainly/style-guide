import React, {
  FC,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  useContext,
} from 'react';
import {MDXProvider} from '@mdx-js/react';
import {toId, storyNameFromExport} from '@storybook/csf';
import {resetComponents} from '@storybook/components/html';
import {Preview as PurePreview} from './Preview';
import {DocsContext, DocsContextProps} from '@storybook/addon-docs/dist/blocks';
import {
  SourceContext,
  SourceContextProps,
} from '@storybook/addon-docs/dist/blocks/SourceContainer';
import {getSourceProps} from '@storybook/addon-docs/dist/blocks/Source';

export const SourceState = {
  OPEN: 'open',
  CLOSED: 'closed',
  NONE: 'none',
};

const getPreviewProps = (
  {withSource = SourceState.CLOSED, mdxSource, children, ...props},
  docsContext,
  sourceContext
) => {
  if (withSource === SourceState.NONE) {
    return props;
  }
  if (mdxSource) {
    return {
      ...props,
      withSource: getSourceProps(
        {code: decodeURI(mdxSource)},
        docsContext,
        sourceContext
      ),
    };
  }
  const childArray: ReactNodeArray = Array.isArray(children)
    ? children
    : [children];
  const stories = (childArray.filter(
    (c: ReactElement) => c.props && (c.props.id || c.props.name)
  ): Array<ReactElement>);
  const {mdxComponentMeta, mdxStoryNameToKey} = docsContext;
  const targetIds = stories.map(
    s =>
      s.props.id ||
      toId(
        mdxComponentMeta.id || mdxComponentMeta.title,
        storyNameFromExport(mdxStoryNameToKey[s.props.name])
      )
  );
  const sourceProps = getSourceProps(
    {ids: targetIds},
    docsContext,
    sourceContext
  );

  return {
    ...props, // pass through columns etc.
    withSource: sourceProps,
    isExpanded: withSource === SourceState.OPEN,
  };
};

export const Canvas = props => {
  const docsContext = useContext(DocsContext);
  const sourceContext = useContext(SourceContext);
  const previewProps = getPreviewProps(props, docsContext, sourceContext);
  const {children} = props;

  return (
    <MDXProvider components={resetComponents}>
      <PurePreview {...previewProps}>{children}</PurePreview>
    </MDXProvider>
  );
};
