import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import FileHandler, {FILE_HANDLER_COLORS_SET} from '../FileHandler';
import {TYPE as ICON_TYPE} from 'icons/Icon';

const FileHandlers = () => {
  const settings = [
    {
      name: 'color',
      values: FILE_HANDLER_COLORS_SET,
    },
    {
      name: 'iconType',
      values: ICON_TYPE,
    },
    {
      name: 'thumbnailSrc',
      values: String,
    },
    {
      name: 'src',
      values: String,
    },
    {
      name: 'loading',
      values: Boolean,
    },
    {
      name: 'onClose',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <FileHandler>text</FileHandler>
      </DocsActiveBlock>
    </div>
  );
};

export default FileHandlers;
