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

const exampleOptions = [
  {value: 'option1', text: 'Choose country'},
  {value: 'option2', text: 'USA'},
  {value: 'option3', text: 'Poland'},
];

const voidFunction = () => undefined;

const formElements = () => (
  <Flex direction="row" justifyContent="space-between">
    <Flex>
      <ContrastBox>
        <Box>
          <Flex direction="column" marginBottom="m">
            <Flex marginBottom="xs">
              <Headline size="small">Sign up with your email address</Headline>
            </Flex>
            <Flex marginBottom="m">
              <Text size="small">
                Already have an account? <Link size="small">Log in here</Link>
              </Text>
            </Flex>

            <Flex direction="column">
              <Flex direction="column" marginBottom="m">
                <Flex marginBottom="xs">
                  <Text size="xsmall" weight="bold">
                    Username
                  </Text>
                </Flex>
                <Input
                  fullWidth
                  placeholder="pick a username"
                  onChange={voidFunction}
                />
              </Flex>
              <Flex direction="column" marginBottom="m">
                <Flex marginBottom="xs">
                  <Text size="xsmall" weight="bold">
                    Password
                  </Text>
                </Flex>
                <Input
                  fullWidth
                  type="password"
                  value="secret"
                  placeholder="Type password"
                  onChange={voidFunction}
                />
              </Flex>
              <Flex direction="column" marginBottom="m">
                <Flex marginBottom="xs">
                  <Text size="xsmall" weight="bold">
                    Country
                  </Text>
                </Flex>
                <Select fullWidth options={exampleOptions} />
              </Flex>
              <Flex direction="column" marginBottom="m">
                <Flex marginBottom="xs">
                  <Text size="xsmall" weight="bold">
                    Birthday
                  </Text>
                </Flex>
                <Flex direction="row" marginBottom="m">
                  <Flex marginRight="xs">
                    <Select
                      options={[
                        {value: 'option1', text: 'Month'},
                        {value: 'option2', text: '1'},
                        {value: 'option3', text: '2'},
                      ]}
                    />
                  </Flex>
                  <Flex marginRight="xs">
                    <Select
                      options={[
                        {value: 'option1', text: 'Day'},
                        {value: 'option2', text: '1'},
                        {value: 'option3', text: '2'},
                      ]}
                    />
                  </Flex>
                  <Select
                    options={[
                      {value: 'option1', text: 'Year'},
                      {value: 'option2', text: '1910'},
                      {value: 'option3', text: '1911'},
                    ]}
                  />
                </Flex>
                <Button>Sign up</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </ContrastBox>
    </Flex>
    <Flex>
      <Box color="gray-secondary-lightest">
        <Flex direction="column" marginBottom="m">
          <Flex marginBottom="xs">
            <Headline size="small">Sign up with your email address</Headline>
          </Flex>
          <Flex marginBottom="m">
            <Text size="small">
              Already have an account? <Link size="small">Log in here</Link>
            </Text>
          </Flex>

          <Flex direction="column">
            <Flex direction="column" marginBottom="m">
              <Flex marginBottom="xs">
                <Text size="xsmall" weight="bold">
                  Username
                </Text>
              </Flex>
              <Input
                fullWidth
                color="white"
                placeholder="pick a username"
                onChange={voidFunction}
              />
            </Flex>
            <Flex direction="column" marginBottom="m">
              <Flex marginBottom="xs">
                <Text size="xsmall" weight="bold">
                  Password
                </Text>
              </Flex>
              <Input
                fullWidth
                color="white"
                type="password"
                value="secret"
                placeholder="Type password"
                onChange={voidFunction}
              />
            </Flex>
            <Flex direction="column" marginBottom="m">
              <Flex marginBottom="xs">
                <Text size="xsmall" weight="bold">
                  Country
                </Text>
              </Flex>
              <Select color="white" fullWidth options={exampleOptions} />
            </Flex>
            <Flex direction="column" marginBottom="m">
              <Flex marginBottom="xs">
                <Text size="xsmall" weight="bold">
                  Birthday
                </Text>
              </Flex>
              <Flex direction="row" marginBottom="m">
                <Flex marginRight="xs">
                  <Select
                    color="white"
                    options={[
                      {value: 'option1', text: 'Month'},
                      {value: 'option2', text: '1'},
                      {value: 'option3', text: '2'},
                    ]}
                  />
                </Flex>
                <Flex marginRight="xs">
                  <Select
                    color="white"
                    options={[
                      {value: 'option1', text: 'Day'},
                      {value: 'option2', text: '1'},
                      {value: 'option3', text: '2'},
                    ]}
                  />
                </Flex>
                <Select
                  color="white"
                  options={[
                    {value: 'option1', text: 'Year'},
                    {value: 'option2', text: '1910'},
                    {value: 'option3', text: '1911'},
                  ]}
                />
              </Flex>
              <Button>Sign up</Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </Flex>
);

export default formElements;
