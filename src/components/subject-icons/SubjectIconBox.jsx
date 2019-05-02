// @flow
import React from 'react';
import classNames from 'classnames';
import * as SubjectIconModule from './SubjectIcon';

const {default: SubjectIcon, TYPE, SIZE} = SubjectIconModule;

type PropsType = {
  className?: string,
  darker?: boolean,
  type: SubjectIconModule.IconTypeType,
  size?: SubjectIconModule.SizeType
};

const SubjectIconBox = ({type, size = SIZE.NORMAL, darker, className, ...props}: PropsType) => {
  const boxClass = classNames('sg-subject-icon-box', {
    'sg-subject-icon-box--darker': darker
  }, className);

  return (
    <div {...props} className={boxClass}>
      <SubjectIcon type={type} size={size} />
    </div>
  );
};

export default SubjectIconBox;
export {TYPE, SIZE};
