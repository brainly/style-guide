import {main} from './main';
import {Lambda} from '@aws-sdk/client-lambda';

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

jest.mock('fs', () => {
  return {
    readFileSync: jest.fn(path => {
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
    }),
    writeFileSync: jest.fn(() => {
      return true;
    }),
  };
});

jest.mock('glob', () => {
  return {
    sync() {
      return ['src/pages/Page1.jsx'];
    },
  };
});

describe('metrics cli', () => {
  it('creates report file', async () => {
    main('9999f664', 1666868271000);

    expect(Lambda.mock.results[0].value.invoke).toHaveBeenCalledWith({
      FunctionName: 'post_styleguide_metrics_lambda',
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
});
