import * as React from 'react';
import classNames from 'classnames';
import type {IconTypeType, SizeType} from './SubjectIcon';
import SubjectIcon, {TYPE, SIZE} from './SubjectIcon';
export type SubjectIconBoxPropsType = {
  className?: string;
  darker?: boolean;
  type: IconTypeType;
  size?: SizeType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'className' | 'darker' | 'type' | 'size'
>;

const SubjectIconBox = ({
  type,
  size = SIZE.NORMAL,
  darker,
  className,
  ...props
}: SubjectIconBoxPropsType) => {
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
