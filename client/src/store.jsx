import {createStore} from 'redux';

const initialState = {
  phones: [],
  phoneDetail: {}
};

const store = createStore((state = initialState, action = {}) => {
  switch(action.type){
    case 'MAKE_REQUEST':
      return {
        ...state,
        isFetching: true,
      }
    case 'GET_PHONES':
      return {
        ...state,
        phones: action.phones,
        isFetching: false,
      };
    case 'GET_PHONE_DETAIL':
      return {
        ...state,
        phoneDetail: action.phoneDetail,
        isFetching: false,
      }
    default:
      return state;
  }
});

export default store;