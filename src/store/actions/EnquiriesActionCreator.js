import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './EnquiriesAction';

const enquiriesActionCreator = (url) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default enquiriesActionCreator;