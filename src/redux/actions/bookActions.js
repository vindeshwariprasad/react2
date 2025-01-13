// export const addBook = (book) => ({
//     type: 'ADD_BOOK',
//     payload: book,
//   });


export const addBook = (book) => {
  return {
    type: 'ADD_BOOK',
    payload: book,
  };
};
