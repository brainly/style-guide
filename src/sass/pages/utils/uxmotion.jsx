import * as React from 'react';
import DocsBlock from 'components/DocsBlock';

const index = () => (
  <div>
    <DocsBlock info="Motion animation durations">
      <ul>
        <li>
          <code>$durationInstant</code>: 0ms
        </li>
        <li>
          <code>$durationQuick1</code>: 80ms
        </li>
        <li>
          <code>$durationQuick2</code>: 120ms
        </li>
        <li>
          <code>$durationModerate1</code>: 180ms
        </li>
        <li>
          <code>$durationModerate2</code>: 260ms
        </li>
        <li>
          <code>$durationGentle1</code>: 320ms
        </li>
        <li>
          <code>$durationGentle2</code>: 400ms
        </li>
      </ul>
    </DocsBlock>
    <DocsBlock info="Transition timing functions">
      <ul>
        <li>
          <code>$easingRegular</code>: 0ms
        </li>
        <li>
          <code>$easingEntry</code>: 80ms
        </li>
        <li>
          <code>$easingExit</code>: 120ms
        </li>
        <li>
          <code>$easingLinear</code>: 180ms
        </li>
      </ul>
    </DocsBlock>
  </div>
);

export default index;
