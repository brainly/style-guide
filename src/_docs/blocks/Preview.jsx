// @flow

import React, {Children, useState} from 'react';
import type {Element} from 'react';
import {darken} from 'polished';
import {styled} from '@storybook/theming';

import {getBlockBackgroundStyle} from '@storybook/components/dist/blocks/BlockBackgroundStyles';
import {Source, SourceProps} from '@storybook/components/dist/blocks/Source';
import {
  ActionBar,
  ActionItem,
} from '@storybook/components/dist/ActionBar/ActionBar';
import {Toolbar} from '@storybook/components/dist/blocks/Toolbar';
import {ZoomContext} from '@storybook/components/dist/blocks/ZoomContext';

export interface PreviewProps {
  isColumn?: boolean;
  columns?: number;
  withSource?: SourceProps;
  isExpanded?: boolean;
  withToolbar?: boolean;
  className?: string;
  additionalActions?: Array<ActionItem>;
}

type LayoutType = 'padded' | 'fullscreen' | 'centered';

const ChildrenContainer = styled.div(
  ({isColumn, columns, layout}) => ({
    display: isColumn || !columns ? 'block' : 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    overflow: 'auto',
    flexDirection: isColumn ? 'column' : 'row',

    '& > *': isColumn
      ? {
          width: layout !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
          display: 'block',
        }
      : {
          maxWidth: layout !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
          display: 'inline-block',
        },
  }),
  ({layout = 'padded'}) =>
    layout === 'centered' || layout === 'padded'
      ? {
          padding: '30px 20px',
          margin: -10,
          '& > *': {
            width: 'auto',
            border: '10px solid transparent!important',
          },
        }
      : {},
  ({layout = 'padded'}) =>
    layout === 'centered'
      ? {
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }
      : {},
  ({zoom = 1}) => ({
    '> *': {
      zoom: 1 / zoom,
    },
  }),
  ({columns}) =>
    columns && columns > 1
      ? {'> *': {minWidth: `calc(100% / ${columns} - 20px)`}}
      : {}
);

const StyledSource = styled(Source)(({theme}) => ({
  margin: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: theme.appBorderRadius,
  borderBottomRightRadius: theme.appBorderRadius,
  border: 'none',

  background:
    theme.base === 'light'
      ? 'rgba(0, 0, 0, 0.85)'
      : darken(0.05, theme.background.content),
  color: theme.color.lightest,
  button: {
    background:
      theme.base === 'light'
        ? 'rgba(0, 0, 0, 0.85)'
        : darken(0.05, theme.background.content),
  },
}));

const PreviewContainer = styled.div(
  ({theme, withSource, isExpanded}) => ({
    position: 'relative',
    overflow: 'hidden',
    margin: '25px 0 40px',
    ...getBlockBackgroundStyle(theme),
    borderBottomLeftRadius: withSource && isExpanded && 0,
    borderBottomRightRadius: withSource && isExpanded && 0,
    borderBottomWidth: isExpanded && 0,
  }),
  ({withToolbar}) => withToolbar && {paddingTop: 40}
);

interface SourceItem {
  source?: Element<*>;
  actionItem: ActionItem;
}

const getSource = (
  withSource: SourceProps,
  expanded: boolean,
  setExpanded: Function,
  sourceType: 'jsx' | 'html'
): SourceItem => {
  switch (true) {
    case !!(withSource && withSource.error): {
      return {
        source: null,
        actionItem: {
          title: 'No code available',
          disabled: true,
          onClick: () => setExpanded(false),
        },
      };
    }
    case expanded: {
      const {code: jsx, htmlCode} = withSource;
      const code = sourceType === 'jsx' ? jsx : htmlCode;

      return {
        source: <StyledSource {...withSource} code={code} dark />,
        actionItem: {title: 'Hide code', onClick: () => setExpanded(false)},
      };
    }
    default: {
      return {
        source: null,
        actionItem: {title: 'Show code', onClick: () => setExpanded(true)},
      };
    }
  }
};

function getStoryId(children) {
  if (Children.count(children) === 1) {
    const elt = children;

    if (elt.props) {
      return elt.props.id;
    }
  }
  return null;
}

const PositionedToolbar = styled(Toolbar)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 40,
});

const Relative = styled.div({
  overflow: 'hidden',
  position: 'relative',
});

const SourceSelectionList = styled.ul({
  position: 'absolute',
  bottom: '0',
  left: '0',
  margin: '0px',
  padding: '0px',
  display: 'flex',
  listStyle: 'none',
});

const SourceSelectionItem = styled.li({
  margin: '0px',
  listStyle: 'none',
});

const SourceSelectionButton = styled.button(({active}) => ({
  height: 25,
  width: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  background: 'none',
  border: 'none',
  appearance: 'none',
  textDecoration: 'none',
  lineHeight: '16px',
  fontSize: '12px',
  fontWeight: '700',
  whiteSpace: 'nowrap',
  color: active ? 'rgb(30, 167, 253)' : 'rgb(153, 153, 153)',
  boxShadow: active ? 'rgb(30, 167, 253) 0px -3px 0px 0px inset' : 'none',
}));

type SourceSelectionBarPropsType = {
  selected: string,
  onChange: () => mixed,
};

const SourceSelectionBar = ({
  selected,
  onChange = () => null,
}: SourceSelectionBarPropsType) => {
  const createChangeHandler = value => () => onChange(value);

  return (
    <SourceSelectionList>
      <SourceSelectionItem>
        <SourceSelectionButton
          onClick={createChangeHandler('jsx')}
          active={selected === 'jsx'}
        >
          JSX
        </SourceSelectionButton>
      </SourceSelectionItem>
      <SourceSelectionItem>
        <SourceSelectionButton
          onClick={createChangeHandler('html')}
          active={selected === 'html'}
        >
          HTML
        </SourceSelectionButton>
      </SourceSelectionItem>
    </SourceSelectionList>
  );
};

const getLayout = children => {
  return children.reduce((result, c) => {
    if (result) {
      return result;
    }
    if (typeof c === 'string' || typeof c === 'number') {
      return 'padded';
    }
    return (
      (c.props && c.props.parameters && c.props.parameters.layout) || 'padded'
    );
  }, undefined);
};

const Preview = ({
  isColumn,
  columns,
  children,
  withSource,
  withToolbar = false,
  isExpanded = false,
  additionalActions,
  className,
  ...props
}: PreviewProps) => {
  const [sourceType, setSourceType] = useState('jsx');
  const [expanded, setExpanded] = useState(isExpanded);
  const {source, actionItem} = getSource(
    withSource,
    expanded,
    setExpanded,
    sourceType
  );
  const [scale, setScale] = useState(1);
  const previewClasses = [className].concat(['sbdocs', 'sbdocs-preview']);
  const defaultActionItems = withSource ? [actionItem] : [];
  const actionItems = additionalActions
    ? [...defaultActionItems, ...additionalActions]
    : defaultActionItems;

  const handleSourceChange = value => {
    setSourceType(value);
  };

  const layout = getLayout(
    Children.count(children) === 1 ? [children] : children
  );

  return (
    <PreviewContainer
      {...{withSource, withToolbar}}
      {...props}
      className={previewClasses.join(' ')}
    >
      {withToolbar && (
        <PositionedToolbar
          border
          zoom={z => setScale(scale * z)}
          resetZoom={() => setScale(1)}
          storyId={getStoryId(children)}
          baseUrl="./iframe.html"
        />
      )}
      <ZoomContext.Provider value={{scale}}>
        <Relative className="docs-story">
          <ChildrenContainer
            isColumn={isColumn || !Array.isArray(children)}
            columns={columns}
            zoom={scale}
            layout={layout}
          >
            {Array.isArray(children) ? (
              // eslint-disable-next-line react/no-array-index-key
              children.map((child, i) => <div key={i}>{child}</div>)
            ) : (
              <div>{children}</div>
            )}
          </ChildrenContainer>
          <ActionBar actionItems={actionItems} />
          {expanded && (
            <SourceSelectionBar
              onChange={handleSourceChange}
              selected={sourceType}
            />
          )}
        </Relative>
      </ZoomContext.Provider>
      {withSource && source}
    </PreviewContainer>
  );
};

export {Preview};
