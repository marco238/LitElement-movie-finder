export const ADD_FILMS = 'ADD_FILMS';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';
export const DELETE_FILM = 'DELETE_FILM';

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
