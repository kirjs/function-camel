import {createStore} from 'redux';
import {UPDATE_CODE} from './actions';

var initialState = {
  exercise: {
    code: 'on'
  },
  exercises: {
    start: {
      code: 'on'
    }
  },

};


export default function store() {
  return createStore(function (state = initialState, action) {
    if (action.type === UPDATE_CODE) {
      return {
        ...state,
        exercise: {
          code: action.code
        }
      };
    }

    return state;

  });
};
