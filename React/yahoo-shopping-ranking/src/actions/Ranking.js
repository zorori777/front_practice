import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking'

const APP_ID = 'dj00aiZpPWkzU2kyVThTaWFZdSZzPWNvbnN1bWVyc2VjcmV0Jng9MmQ-'

const startRequest = categoryId => ({
  type: 'START_REQUEST',
  payload: { categoryId },
})

const receiveData = (categoryId, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { categoryId, error, response},
})

const finishRequest = categoryId => ({
  type: 'FINISH_REQUEST',
  payload: { categoryId },
})

export const fetchRanking = categoryId => {
  return async dispatch => {
    dispatch(startRequest(categoryId));;

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId,
    });

    try {
      const response = await fetchJsonp(`${API_URL}${queryString}`);
      const data = await response.json();
      dispatch(receiveData(categoryId, null, data))
    } catch (err) {
      dispatch(receiveData(categoryId, err));
    }
    dispatch(finishRequest(categoryId));
  };
};
