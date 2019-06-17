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
        case 'orbiters':
          const orbiters = await fetchAnything(apiUrls.orbiters);
          dispatch(action.addOrbiters(orbiters));
          break;
        case 'launch_providers':
          const launch_providers = await fetchAnything(apiUrls.launch_providers);
          dispatch(action.addLaunchProviders(launch_providers));
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

