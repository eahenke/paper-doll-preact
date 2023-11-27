import type { Reducer } from 'preact/hooks';

type BasicAction = {
    type: string;
};

export type UndoableAction<T> =
    | T
    | {
          type: 'UNDO';
      };

export type UndoableState<T> = {
    past: T[];
    present: T;
};

export const undoable =
    <S, A extends BasicAction>(reducer: Reducer<S, A>) =>
    (state: UndoableState<S>, action: A) => {
        switch (action.type) {
            case 'UNDO': {
                if (!state.past.length) return state;

                const previous = state.past[state.past.length - 1];
                const newPast = state.past.slice(0, state.past.length - 1);

                return {
                    past: newPast,
                    present: previous
                };
            }
            default: {
                const newPresent = reducer(state.present, action);
                if (newPresent === state.present) return state;

                return {
                    past: [...state.past, state.present],
                    present: newPresent
                };
            }
        }
    };
