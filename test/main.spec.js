import {main} from '../bin/metrics/main';
import {Lambda} from '@aws-sdk/client-lambda';
import fs from 'fs';

jest.mock('@aws-sdk/client-lambda', () => {
  return {
    Lambda: jest.fn(() => {
      return {
        invoke: jest.fn(() => {
          return Promise.resolve();
        }),
      };
    }),
  };
});

jest.mock('fs');
jest.mock('prettier', () => ({
  format: jest.fn(input => input),
}));

jest.mock('glob', () => {
  return {
    sync() {
      return ['src/pages/Page1.jsx'];
    },
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

fs.readFileSync.mockImplementation(path => {
  if (path === 'package.json') {
    return `{
          "name": "brainly-app",
  "dependencies": {"brainly-style-guide": "220.0.0"}
        }`;
  } else {
    return `import {Button} from 'brainly-style-guide';

export const Foo = () => (
  <div>
    <Button variant={variant} size="m">
      buttonText
    </Button>
    <Button role="link" size="xl">
      buttonText
    </Button>
  </div>
);
`;
  }
});

fs.writeFileSync.mockImplementation(() => {
  return true;
});

describe('metrics cli', () => {
  it('post metrics to styleguide_metrics_post_components_lambda', async () => {
    await main('9999f664', 1666868271000, {});

    expect(Lambda.mock.results[0].value.invoke).toHaveBeenCalledWith({
      FunctionName: 'styleguide_metrics_post_components_lambda',
      Payload: JSON.stringify({
        styleguideVersion: '220.0.0',
        commitID: '9999f664',
        components: [
          {
            location: 'src/pages/Page1.jsx#5:4',
            name: 'Button',
            props: {
              size: 'm',
            },
          },
          {
            location: 'src/pages/Page1.jsx#8:4',
            name: 'Button',
            props: {
              role: 'link',
              size: 'xl',
            },
          },
        ],
        commitDate: '2022-10-27T10:57:51.000Z',
        project: 'brainly-app',
      }),
    });
  });

  it('when dry mode, then it outputs metrics to stdout, does not post metrics to lambda', async () => {
    jest.spyOn(process.stdout, 'write');
    await main('9999f664', 1666868271000, {dry: true});

    expect(Lambda.mock.results[0].value.invoke).not.toHaveBeenCalled();
    expect(process.stdout.write).toHaveBeenCalledWith(
      JSON.stringify({
        styleguideVersion: '220.0.0',
        commitID: '9999f664',
        components: [
          {
            location: 'src/pages/Page1.jsx#5:4',
            name: 'Button',
            props: {
              size: 'm',
            },
          },
          {
            location: 'src/pages/Page1.jsx#8:4',
            name: 'Button',
            props: {
              role: 'link',
              size: 'xl',
            },
          },
        ],
        commitDate: '2022-10-27T10:57:51.000Z',
        project: 'brainly-app',
      })
    );
  });
});
