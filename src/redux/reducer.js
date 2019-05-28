import {
  LOG_IN,
  UPDATE_PATH,
  ADD_FILMS,
  UPDATE_TOPIC,
  DELETE_FILM
} from './actions.js';

const INITIAL_STATE = {
  path: '/',
  topic: '',
  films: [],
  logged: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logged: true
        };
    case UPDATE_PATH:
      return {
        ...state,
        path: action.path
        };
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