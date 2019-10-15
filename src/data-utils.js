import urlUtils from './urlUtils';

//Function that returns initial state for the HighScores.
const getHighScores = async () => {
  const url = urlUtils.base_url + '/highscores';

  const response = await fetch(url);
  const myJson = await response.json();

  return myJson;

};

export default getHighScores;