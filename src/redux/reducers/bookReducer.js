


const initialState = [
  {
    id: 1,
    title: 'System',
    author: 'Maya',
    description: 'Description of Fiction Book 1',
    rating: 4,
    category: 'fiction'
  },
  {
    id: 2,
    title: 'Okay',
    author: 'Ajay',
    description: 'Description of Non-Fiction Book 1',
    rating: 5,
    category: 'non-fiction'
  },
  {
    id: 3,
    title: 'Science',
    author: 'Newton',
    description: 'Description of Sci-Fi Book 1',
    rating: 4,
    category: 'sci-fi'
  }
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;


  