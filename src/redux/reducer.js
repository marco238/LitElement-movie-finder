import {
  ADD_FILMS,
  UPDATE_TOPIC
} from './actions.js';

const INITIAL_STATE = {
  topic: '',
  films: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FILMS:
      return {
        ...state,
        films: action.films
        };
      case UPDATE_TOPIC:
        return {
          ...state,
          topic: action.topic
        };
      default:
      return state;
  }
};