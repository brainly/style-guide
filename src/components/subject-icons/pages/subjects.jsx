import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import SubjectIcon, {TYPE, SIZE} from '../SubjectIcon';
import SubjectIconBox from '../SubjectIconBox';

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
      <SubjectIconBox type={TYPE.LIFE_SCIENCE}/>
      <SubjectIconBox type={TYPE.LIFE_SCIENCE} size={SIZE.MEDIUM}/>
      <SubjectIconBox type={TYPE.LIFE_SCIENCE} size={SIZE.SMALL}/>
      <br/>
      <SubjectIconBox type={TYPE.LIFE_SCIENCE} darker={true}/>
      <SubjectIconBox type={TYPE.LIFE_SCIENCE} size={SIZE.MEDIUM} darker={true}/>
      <SubjectIconBox type={TYPE.LIFE_SCIENCE} size={SIZE.SMALL} darker={true}/>
    </DocsBlock>
  </div>;

export default Subjects;
