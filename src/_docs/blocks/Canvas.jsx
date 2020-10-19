import React, {useContext} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MDXProvider} from '@mdx-js/react';
import {toId, storyNameFromExport} from '@storybook/csf';
import {resetComponents} from '@storybook/components/html';
import {Preview as PurePreview} from './Preview';
import {DocsContext} from '@storybook/addon-docs/dist/blocks';
import {SourceContext} from '@storybook/addon-docs/dist/blocks/SourceContainer';
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
  const childArray = Array.isArray(children) ? children : [children];
  const stories = childArray.filter(
    c => c.props && (c.props.id || c.props.name)
  );
  const {mdxComponentMeta, mdxStoryNameToKey} = docsContext;
  const targetIds = stories.map(
    s =>
      s.props.id ||
      toId(
        mdxComponentMeta.id || mdxComponentMeta.title,
        storyNameFromExport(mdxStoryNameToKey[s.props.name])
      )
  );

  // get original components from stories and generate html code for them
  const htmlCode = stories
    .map(story => {
      const storyChild = React.Children.only(story.props.children);
      const element =
        typeof storyChild === 'function' ? storyChild() : storyChild;
      const staticMarkup = renderToStaticMarkup(element);

      return staticMarkup;
    })
    .join('\r\n\r\n');

  const sourceProps = getSourceProps(
    {ids: targetIds},
    docsContext,
    sourceContext
  );

  return {
    ...props,
    withSource: {...sourceProps, htmlCode},
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
