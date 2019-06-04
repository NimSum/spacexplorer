import * as action from "../actions";
import fetchAnything from '../utils/apiFetches/fetchAnything';
import apiUrls from '../utils/apiFetches/apiUrls';

const categoryManager = category => {
  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))
      switch (category) {
        case 'rockets':
          const rockets = await fetchAnything(apiUrls.rockets);
          dispatch(action.addRockets(rockets));
          break;
        case 'astronauts':
          const astronauts = await fetchAnything(apiUrls.astronauts);
          dispatch(action.addAstronauts(astronauts));
          break;
        default:
          console.log('yolo')
      }
      dispatch(action.isLoading(false))    
    } catch(error) {
        dispatch(action.hasErrored(error.message))
    }
  }
}

export default categoryManager;

