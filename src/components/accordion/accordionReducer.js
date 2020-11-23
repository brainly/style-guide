// @flow strict

export type ActionType = {
  type: 'accordion/SET_OPENED',
  payload: {id: string, value: boolean},
};

export type StateType = $ReadOnly<{
  opened: {
    [key: string]: boolean,
  },
  noGapBetweenElements: boolean,
  allowMultiple: boolean,
}>;

export function accordionReducer(
  state: StateType,
  action: ActionType
): StateType {
  switch (action.type) {
    case 'accordion/SET_OPENED': {
      const {allowMultiple, opened} = state;
      const {id, value} = action.payload;

      return {
        ...state,
        opened: allowMultiple ? {...opened, [id]: value} : {[id]: value},
      };
    }
    default:
      return state;
  }
}
