import klassy from 'helpers/klassy';


describe('klassy', () => {
  it('should return class object with name specified as a string', () => {
    const TEST_CLASS = 'test-class';

    const result = klassy(TEST_CLASS)();

    expect(result.className).toEqual(TEST_CLASS)
  });

  it('should return class object with name from package.json', () => {
    const json = {name: 'test_2'};

    const result = klassy(json)();

    expect(result.className).toEqual(json.name);
  });

  it('should return class object with name overriden by opts param', () => {
    const json = {name: 'json_name'};
    const override = {name: 'override_name'};

    const result = klassy(json, override)();

    expect(result.className).toEqual(override.name);
    expect(result.className).not.toEqual(json.name);
  });
});
