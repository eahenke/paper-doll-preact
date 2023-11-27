import { useReducer } from 'preact/hooks';
import { Item } from '../types/items';
import { Action, DollState } from '../types/state';
import { UndoableAction, undoable } from './undoable';

const ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    RESET: 'RESET'
} as const;

const initialDollState: DollState = {
    HAIR: null,
    TOP: null,
    OUTERWEAR: null,
    PANTS: null,
    SOCKS: null,
    SHOES: null
};

const addItem = (state: DollState, item: Item) => {
    if (state[item.type] === item.id) return state;

    return {
        ...state,
        [item.type]: item.id
    };
};

const reset = () => ({ ...initialDollState });

const reducer = (state: DollState, action: UndoableAction<Action>) => {
    switch (action.type) {
        case ACTIONS.ADD_ITEM: {
            return addItem(state, action.item);
        }
        case ACTIONS.RESET: {
            return reset();
        }
        default: {
            return state;
        }
    }
};

export const useDoll = () => {
    const [state, dispatch] = useReducer(undoable(reducer), {
        past: [],
        present: initialDollState
    });

    const addItemDispatch = (item: Item) =>
        dispatch({
            type: ACTIONS.ADD_ITEM,
            item
        });

    const resetDispatch = () => dispatch({ type: ACTIONS.RESET });

    const undoDispatch = () => dispatch({ type: 'UNDO' });

    return {
        dollState: state?.present,
        addItem: addItemDispatch,
        reset: resetDispatch,
        undo: undoDispatch
    };
};
