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
          shimmer: {origin, active: false, id, detached: true},
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

  return (
    <div style={{background: 'gray', padding: 20}}>
      <Flex direction="column">
        <div>
          <Button onClick={addGlobalSynced} variant="solid-indigo">
            Add global-synced
          </Button>
          <Button onClick={addSynced}>Add id synced</Button>
        </div>
        <Flex marginTop="m" direction="column">
          <div style={{width: 1000}}>
            <Flex wrap>
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
          </div>
        </Flex>
      </Flex>
    </div>
  );
};
