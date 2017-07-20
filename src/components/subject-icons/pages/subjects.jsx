import React from 'react';
import DocsBlock from 'DocsBlock';
import ContrastBox from 'ContrastBox';
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
      <SubjectIconBox>
        <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
      </SubjectIconBox>
      <SubjectIconBox>
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.MEDIUM}/>
      </SubjectIconBox>
      <SubjectIconBox>
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.SMALL}/>
      </SubjectIconBox>
      <br/>
      <SubjectIconBox darker={true}>
        <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
      </SubjectIconBox>
      <SubjectIconBox darker={true}>
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.MEDIUM}/>
      </SubjectIconBox>
      <SubjectIconBox darker={true}>
        <SubjectIcon type={TYPE.LIFE_SCIENCE} size={SIZE.SMALL}/>
      </SubjectIconBox>
    </DocsBlock>
  </div>;

export default Subjects;
