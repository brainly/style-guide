// @flow

import React, {useContext} from 'react';
import type {Element} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MDXProvider} from '@mdx-js/react';
import {toId, storyNameFromExport} from '@storybook/csf';
import {resetComponents} from '@storybook/components/html';
import {Preview as PurePreview} from './Preview';
import {DocsContext} from '@storybook/addon-docs/dist/esm/blocks/DocsContext';
import {SourceContext} from '@storybook/addon-docs/dist/esm/blocks/SourceContainer';
import {getSourceProps} from '@storybook/addon-docs/dist/esm/blocks/Source';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';

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
    (c: any) => c.props && (c.props.id || c.props.name)
  );
  const {mdxComponentMeta, mdxStoryNameToKey} = docsContext;
  const targetIds = stories.map(
    (s: any) =>
      s.props.id ||
      toId(
        mdxComponentMeta.id || mdxComponentMeta.title,
        storyNameFromExport(mdxStoryNameToKey[s.props.name])
      )
  );

  // Get original stories from document
  const componentStories = docsContext.componentStories();

  // Find matching stories from all listed in current document
  const currentStories = componentStories.filter(story =>
    targetIds.includes(story.id)
  );

  // and generate html code for them
  const htmlCode = prettier.format(
    currentStories
      .map(story => {
        const staticMarkup = renderToStaticMarkup(
          story.originalStoryFn(story.parameters.args)
        );

        return staticMarkup;
      })
      .join('\r\n\r\n'),
    {
      parser: 'babel',
      plugins: [parserBabel],
    }
  );

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

interface CanvasPropsType {
  withSource?: 'open' | 'closed' | 'none';
  mdxSource?: string;
  children: Element<*>;
  isExpanded?: boolean;
}

export const Canvas = (props: CanvasPropsType) => {
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
