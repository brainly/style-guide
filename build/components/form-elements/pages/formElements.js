import React from 'react';
import Input from '../Input';
import Select from '../Select';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';
import Box from '../../box/Box';
import Headline from '../../text/Headline';
import Text from '../../text/Text';
import Link from '../../text/Link';
import Button from '../../buttons/Button';
var exampleOptions = [{
  value: 'option1',
  text: 'Choose country'
}, {
  value: 'option2',
  text: 'USA'
}, {
  value: 'option3',
  text: 'Poland'
}];

var voidFunction = function voidFunction() {
  return undefined;
};

var formElements = function formElements() {
  return React.createElement(Flex, {
    direction: "row",
    justifyContent: "space-between"
  }, React.createElement(Flex, null, React.createElement(ContrastBox, null, React.createElement(Box, {
    style: {
      width: '320px'
    }
  }, React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Headline, {
    size: "small"
  }, "Sign up with your email address")), React.createElement(Flex, {
    marginBottom: "m"
  }, React.createElement(Text, {
    size: "small"
  }, "Already have an account? ", React.createElement(Link, {
    size: "small"
  }, "Log in here"))), React.createElement(Flex, {
    direction: "column"
  }, React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Username")), React.createElement(Input, {
    fullWidth: true,
    placeholder: "pick a username",
    onChange: voidFunction
  })), React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Password")), React.createElement(Input, {
    fullWidth: true,
    type: "password",
    value: "secret",
    placeholder: "Type password",
    onChange: voidFunction
  })), React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Country")), React.createElement(Select, {
    fullWidth: true,
    options: exampleOptions
  })), React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Birthday")), React.createElement(Flex, {
    direction: "row",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginRight: "xs"
  }, React.createElement(Select, {
    options: [{
      value: 'option1',
      text: 'Month'
    }, {
      value: 'option2',
      text: '1'
    }, {
      value: 'option3',
      text: '2'
    }]
  })), React.createElement(Flex, {
    marginRight: "xs"
  }, React.createElement(Select, {
    options: [{
      value: 'option1',
      text: 'Day'
    }, {
      value: 'option2',
      text: '1'
    }, {
      value: 'option3',
      text: '2'
    }]
  })), React.createElement(Select, {
    options: [{
      value: 'option1',
      text: 'Year'
    }, {
      value: 'option2',
      text: '1910'
    }, {
      value: 'option3',
      text: '1911'
    }]
  })), React.createElement(Button, null, "Sign up"))))))), React.createElement(Flex, null, React.createElement(Box, {
    color: "gray-secondary-lightest",
    style: {
      width: '320px'
    }
  }, React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Headline, {
    size: "small"
  }, "Sign up with your email address")), React.createElement(Flex, {
    marginBottom: "m"
  }, React.createElement(Text, {
    size: "small"
  }, "Already have an account? ", React.createElement(Link, {
    size: "small"
  }, "Log in here"))), React.createElement(Flex, {
    direction: "column"
  }, React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Username")), React.createElement(Input, {
    fullWidth: true,
    color: "white",
    placeholder: "pick a username",
    onChange: voidFunction
  })), React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Password")), React.createElement(Input, {
    fullWidth: true,
    color: "white",
    type: "password",
    value: "secret",
    placeholder: "Type password",
    onChange: voidFunction
  })), React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Country")), React.createElement(Select, {
    color: "white",
    fullWidth: true,
    options: exampleOptions
  })), React.createElement(Flex, {
    direction: "column",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginBottom: "xs"
  }, React.createElement(Text, {
    size: "xsmall",
    weight: "bold"
  }, "Birthday")), React.createElement(Flex, {
    direction: "row",
    marginBottom: "m"
  }, React.createElement(Flex, {
    marginRight: "xs"
  }, React.createElement(Select, {
    color: "white",
    options: [{
      value: 'option1',
      text: 'Month'
    }, {
      value: 'option2',
      text: '1'
    }, {
      value: 'option3',
      text: '2'
    }]
  })), React.createElement(Flex, {
    marginRight: "xs"
  }, React.createElement(Select, {
    color: "white",
    options: [{
      value: 'option1',
      text: 'Day'
    }, {
      value: 'option2',
      text: '1'
    }, {
      value: 'option3',
      text: '2'
    }]
  })), React.createElement(Select, {
    color: "white",
    options: [{
      value: 'option1',
      text: 'Year'
    }, {
      value: 'option2',
      text: '1910'
    }, {
      value: 'option3',
      text: '1911'
    }]
  })), React.createElement(Button, null, "Sign up")))))));
};

export default formElements;