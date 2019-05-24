import {createStore} from 'redux';

const initialState = {
  displayPhones: []
};

const store = createStore((state = initialState, action) => {
  switch(action.type){
    case 'GET_PHONES':
      return {
        ...state,
        displayPhones: action.payload
      };
    default:
      return state;
  }
});

export default store;