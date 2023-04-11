import React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import {generateId} from '../utils';
import {Shimmer} from './Shimmer';

export default {
  title: 'Components/Shimmer',
  component: Shimmer,
};

export const Default = () => {
  const [buttons, setButtons] = React.useState([]);

  const addSynced = React.useCallback(() => {
    const origin = buttons.length > 0 ? 'sync-custom-origin' : '';
    const id = buttons.length === 0 ? 'sync-custom-origin' : generateId();

    setButtons(
      buttons.concat([
        {
          variant: 'solid',
          id,
          shimmer: {
            idSync: origin,
            active: false,
            id,
            globalSync: false,
            image: `linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 121, 104, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
      )`,
            blendMode: 'difference',
          },
        },
      ])
    );
  }, [buttons]);
  const addGlobalSynced = React.useCallback(() => {
    setButtons(
      buttons.concat([
        {variant: 'solid-indigo', id: generateId(), shimmer: {active: false}},
      ])
    );
  }, [buttons]);

  const toggleActive = React.useCallback(
    (id: string) => {
      const newButtons = buttons.concat([]);

      const buttonToToggle = newButtons.find(button => button.id === id);

      if (buttonToToggle) {
        buttonToToggle.shimmer.active = !buttonToToggle.shimmer.active;
        setButtons(newButtons);
      }
    },
    [buttons]
  );

  const toggleAll = React.useCallback(() => {
    setButtons(
      buttons.map(button => {
        button.shimmer.active = !button.shimmer.active;
        return button;
      })
    );
  }, [buttons]);

  return (
    <div>
      <Flex direction="column">
        <div>
          <Button onClick={addGlobalSynced} variant="solid-indigo">
            Add global-synced
          </Button>
          <Button onClick={addSynced}>Add id synced</Button>
          <Button variant="outline-indigo" onClick={toggleAll}>
            toggle all
          </Button>
        </div>
        <Flex wrap marginTop="m">
          {buttons.map((button, index) => (
            <div key={index} style={{padding: 5}}>
              <Shimmer {...button.shimmer}>
                <Button
                  onClick={() => toggleActive(button.id)}
                  variant={button.variant}
                >
                  My button
                </Button>
              </Shimmer>
            </div>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};
