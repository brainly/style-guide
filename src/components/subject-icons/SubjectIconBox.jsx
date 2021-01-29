// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import type {IconTypeType, SizeType} from './SubjectIcon';
import SubjectIcon, {TYPE, SIZE} from './SubjectIcon';

type PropsType = {
  className?: string,
  darker?: boolean,
  type: IconTypeType,
  size?: SizeType,
  ...
};

const SubjectIconBox = ({
  type,
  size = SIZE.NORMAL,
  darker,
  className,
  ...props
}: PropsType) => {
  const boxClass = classNames(
    'sg-subject-icon-box',
    {
      'sg-subject-icon-box--darker': darker,
    },
    className
  );

  return (
    <div {...props} className={boxClass}>
      <SubjectIcon type={type} size={size} />
    </div>
  );
};

export default SubjectIconBox;
export {TYPE, SIZE};
