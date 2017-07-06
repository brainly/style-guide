import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import SubjectIcon, {TYPE, SIZE} from '../SubjectIcon';

const Subjects = () =>
  <div>
    <DocsBlock info="Medium">
      <ContrastBox>
        {Object.values(TYPE).map(type =>
          <SubjectIcon key={type} type={type} size={SIZE.MEDIUM}/>
        )}
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Small">
      <ContrastBox>
        {Object.values(TYPE).map(type =>
          <SubjectIcon key={type} type={type} size={SIZE.SMALL}/>
        )}
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Subject icon box">
      <div className="sg-subject-icon-box">
        <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
      </div>
      <div className="sg-subject-icon-box">
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.MEDIUM}/>
      </div>
      <div className="sg-subject-icon-box">
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.SMALL}/>
      </div>
      <br/>
      <div className="sg-subject-icon-box sg-subject-icon-box--darker">
        <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
      </div>
      <div className="sg-subject-icon-box sg-subject-icon-box--darker">
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.MEDIUM}/>
      </div>
      <div className="sg-subject-icon-box sg-subject-icon-box--darker">
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.SMALL}/>
      </div>
    </DocsBlock>
  </div>;

export default Subjects;
