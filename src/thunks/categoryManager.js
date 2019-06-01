import * as action from "../actions";
import fetchAnything from '../utils/apiFetches/fetchAnything';

const categoryManager = category => {
  return async (dispatch) => {
    const urls = {
      rockets: 'https://spacelaunchnow.me/api/3.3.1/config/launcher/?mode=detailed',
      astronauts: 'https://spacelaunchnow.me/api/3.3.1/astronaut/?mode=detailed'
    }
    switch (category) {
      case 'rockets':
        const rockets = await fetchAnything(urls.rockets);
        dispatch(action.addRockets(rockets));
        break;
      case 'astronauts':
          const astronauts = await fetchAnything(urls.astronauts);
          dispatch(action.addAstronauts(astronauts));
        break;
      default:
        console.log('yolo')
    }
  }
}

export default categoryManager;

// export const addNewNote = note => {
//   return async dispatch => {
//     try {
//       const response = await postNewNote(note);
//       dispatch(addNote(response));
//     } catch (error) {
//       return error;
//     }
//   };
// };
