import { combineReducers } from 'redux';

const bookReducer = () => {
  return [
    {
      title: 'In the Beginning',
      Author: 'James Model',
      pages: [{ page: 1, chapter: 'two' }]
    },
    {
      title: 'Piercing the darkness',
      Author: 'Rose Red',
      pages: [{ page: 5, chapter: 'six' }]
    },
    {
      title: 'The Future',
      Author: 'Isegun Olukunbi',
      pages: [{ page: 9, chapter: 'seven' }]
    },
    {
      title: 'Apple Jack',
      Author: 'Ify Jack',
      pages: [{ page: 6, chapter: 'three' }]
    }
  ];
};

const SelectedBookReducer = (selectedBook = null, action) => {
  if (action.type === 'BOOK_SELECTED') {
    return action.payload;
  }
  return selectedBook;
};

export default combineReducers({
  books: bookReducer,
  selectedBook: SelectedBookReducer
});
