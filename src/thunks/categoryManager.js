import * as action from "../actions";
import fetchAnything from '../utils/apiFetches/fetchAnything';

export const categoryManager = category => {
  return async dispatch => {
    switch (category) {
      case 'rockets':
        const url = 'https://spacelaunchnow.me/api/3.3.1/config/launcher/?mode=detailed'
        const rockets = await fetchAnything(url);
        dispatch(action.addRockets(rockets));
        break;
      default:
        console.log('yolo')
    }
  }
}


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
