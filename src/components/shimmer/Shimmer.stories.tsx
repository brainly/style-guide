import React, {useEffect} from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import {Shimmer} from './Shimmer';

export default {
  title: 'Components/Shimmer',
  component: Shimmer,
};

type ShimmerItem = {id?: string; origin?: string; detached?: boolean};

export const Default = () => {
  const [synced, setSynced] = React.useState<Array<ShimmerItem>>([]);
  const [globalSynced, setGlobalSynced] = React.useState<Array<ShimmerItem>>([
    {},
  ]);

  const addSynced = React.useCallback(() => {
    setSynced(synced.concat([{origin: 'sync-custom-origin'}]));
  }, [synced]);
  const addGlobalSynced = React.useCallback(() => {
    setGlobalSynced(globalSynced.concat([{}]));
  }, [globalSynced]);

  useEffect(() => {
    setTimeout(() => {
      setSynced(synced =>
        synced.concat([{id: 'sync-custom-origin', detached: true}])
      );
    }, 2000);
  }, []);

  return (
    <div style={{background: 'gray', padding: 20}}>
      <Flex>
        <div>
          <Button onClick={addGlobalSynced} variant="solid-indigo">
            Add global-synced
          </Button>
          {globalSynced.map((shimmer, index) => (
            <div key={index} style={{padding: 10}}>
              <Button shimmer={shimmer}>My button</Button>
            </div>
          ))}
        </div>
        <Flex marginLeft="m" direction="column">
          <Button onClick={addSynced} variant="solid-indigo">
            Add id synced
          </Button>
          {synced.map((shimmer, index) => (
            <div key={index} style={{padding: 10}}>
              <Button shimmer={shimmer} style={{paddingLeft: (index + 1) * 20}}>
                My button
              </Button>
            </div>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};
