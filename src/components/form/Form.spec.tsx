describe('Form', () => {
  // current step
  it('shows mid transparent overlay on the content, except current step');
  it(
    'WHEN current step content is smaller than screen height, THEN it centers current step'
  );
  it(
    'WHEN entering on step, WHEN current step has been touched, THEN validation is fired'
  );

  // validation
  it(
    'WHEN validation is fired AND WHEN validate props returns true, THEN validation pass'
  );

  // navigation
  it('WHEN on step other than first, THEN shows previous step button');
  it(
    'WHEN on step other than last AND WHEN current step pass validation, THEN shows next step button'
  );
  it(
    'WHEN next button is clicked AND WHEN validation is passed, THEN step is changed to next'
  );
  it('shows press enter hint');

  // notification
  it('WHEN step has changed, THEN fires onStepChange');
});
