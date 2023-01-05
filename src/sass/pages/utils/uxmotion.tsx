import * as React from 'react';
import DocsBlock from 'components/DocsBlock';

const index = () => (
  <div>
    <DocsBlock info="Animation durations">
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
    <DocsBlock info="Easing types">
      <ul>
        <li>
          <code>$easingRegular</code>: cubic-bezier(0.35, 0, 0.1, 1);
        </li>
        <li>
          <code>$easingEntry</code>: cubic-bezier(0.1, 0, 0, 1);
        </li>
        <li>
          <code>$easingExit</code>: cubic-bezier(0.3, 0, 1, 0.8);
        </li>
        <li>
          <code>$easingLinear</code>: linear
        </li>
      </ul>
    </DocsBlock>
  </div>
);

export default index;