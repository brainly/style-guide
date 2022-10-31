import {main} from './main';
import {Lambda} from 'aws-sdk';

const fakeCommitID = '9999f664';
const fakeCommitDate = 1666868271000;

jest.mock('aws-sdk', () => {
  return {
    Lambda: jest.fn(() => {
      return {
        invoke: jest.fn(() => {
          return {
            promise() {
              return Promise.resolve();
            },
          };
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
  it('creates report file', () => {
    main(fakeCommitID, fakeCommitDate);

    expect(Lambda.mock.results[0].value.invoke).toHaveBeenCalledWith({
      FunctionName: 'post_styleguide_metrics_lambda',
      Payload: JSON.stringify({
        styleguideVersion: '220.0.0',
        commitID: fakeCommitID,
        components: [
          {
            name: 'Button',
            occurences: [
              {
                attributes: {
                  size: 'm',
                },
                path: 'src/pages/Page1.jsx',
              },
              {
                attributes: {
                  role: 'link',
                  size: 'xl',
                },
                path: 'src/pages/Page1.jsx',
              },
            ],
          },
        ],
        commitDate: '2022-10-27T10:57:51.000Z',
        project: 'brainly-app',
      }),
    });
  });
});
