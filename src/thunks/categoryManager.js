import * as action from "../actions";
import fetchAnything from '../utils/apiFetches/fetchAnything';

export const categoryManager = category => {
  return async dispatch => {
    switch (category) {
      case 'rockets':
        const url =
        // const rockets = await fetchAnything()
      default:

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
