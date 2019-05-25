import {createStore} from 'redux';

const initialState = {
  phones: [],
  phoneDetail: {}
};

const store = createStore((state = initialState, action = {}) => {
  switch(action.type){
    case 'GET_PHONES':
      return {
        ...state,
        phones: action.phones
      };
    case 'GET_PHONE_DETAIL':
      return {
        ...state,
        phoneDetail: action.phoneDetail
      }
    default:
      return state;
  }
});

export default store;