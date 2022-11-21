import {main} from '../../bin/metrics/main';
import {Lambda} from '@aws-sdk/client-lambda';
import fs from 'fs';
// eslint-disable-next-line babel/camelcase
import child_process from 'child_process';

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

jest.mock('child_process');
child_process.execSync.mockImplementation(() => '329j801iou9 1666868271000');

const consoleLogSpy = jest.spyOn(console, 'log');

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
    await main(['src/pages/Page1.jsx'], {});

    expect(Lambda.mock.results[0].value.invoke).toHaveBeenCalledWith({
      FunctionName: 'styleguide_metrics_post_components_lambda',
      Payload: JSON.stringify({
        styleguideVersion: '220.0.0',
        commitID: '329j801iou9',
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
    await main(['src/pages/Page1.jsx'], {dry: true});

    expect(Lambda).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith(
      JSON.stringify({
        styleguideVersion: '220.0.0',
        commitID: '329j801iou9',
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

  it('when paths is empty, then it exits and display error message', async () => {
    await expect(main(null)).rejects.toThrowError(
      'Missing paths. For more infgormation run: sg-metrics --help'
    );
  });

  it('when package.json is no found, then it exits with error', async () => {
    fs.readFileSync.mockImplementationOnce(path => {
      if (path === 'package.json') {
        throw 'read error';
      }
    });

    await expect(main([])).rejects.toThrowError(
      'Malformed or missing package.json. Run CLI in project root directory.'
    );
  });

  it('when brainly-style-guide dependency is not found, then exits with error', async () => {
    fs.readFileSync.mockImplementationOnce(path => {
      if (path === 'package.json') {
        return `{
          "name": "brainly-app",
  "dependencies": {}
        }`;
      }
    });

    await expect(main([])).rejects.toThrowError(
      '"brainly-style-guide" dependency not found in package.json'
    );
  });
});
