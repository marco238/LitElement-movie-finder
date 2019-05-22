export const ADD_FILMS = 'ADD_FILMS';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';

export const addFilms = (films) => {
  return {
    type: ADD_FILMS,
    films: films
  };
};

export const updateTopic = (topic) => {
  return {
    type: UPDATE_TOPIC,
    topic
  };
};
