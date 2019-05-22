import {
  ADD_FILMS,
  UPDATE_TOPIC,
  DELETE_FILM
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
    case DELETE_FILM:
      action.films.splice(action.index, 1);
      return {
        ...state,
        films: action.films
      };
    default:
    return state;
  }
};