import React from 'react';
import { addDecorator } from '@storybook/react';

// load all styles
import '!style-loader!css-loader!sass-loader!../src/main.scss';

const styles = {
  padding: 24,
};

// container for all stories
const Container = ({ children }) => <div style={styles}>{children}</div>;

addDecorator(storyFn => <Container>{storyFn()}</Container>)