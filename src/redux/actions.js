export const LOG_IN = 'LOG_IN';
export const UPDATE_PATH = 'UPDATE_PATH';
export const ADD_FILMS = 'ADD_FILMS';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';
export const DELETE_FILM = 'DELETE_FILM';

export const logIn = () => {
  return {
    type: LOG_IN
  };
};

export const updatePath = (path) => {
  return {
    type: UPDATE_PATH,
    path
  };
};

export const addFilms = (films) => {
  return {
    type: ADD_FILMS,
    films
  };
};

export const updateTopic = (topic) => {
  return {
    type: UPDATE_TOPIC,
    topic
  };
};

export const deleteFilm = (films, index) => {
  return {
    type: DELETE_FILM,
    films,
    index
  };
};
