import { GET_NOTES } from './queries';

//save notes into localstorage
export const saveNotes = cache => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);
  try {
    localStorage.setItem('notes', jsonNotes);
  } catch (error) {
    console.log(error);
  }
};

//get notes from local storage
export const restoreNotes = () => {
  const notes = localStorage.getItem('notes');
  if (notes) {
    try {
      const parsedNotes = JSON.parse(notes);
      return parsedNotes;
    } catch (error) {
      console.log(error);
      return [];
    }
  } else {
    return [];
  }
};
