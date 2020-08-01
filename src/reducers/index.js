import { SEARCH_USER } from '../actions';
import { RENDER_USER_LIST } from '../actions';

const initialState = {
  userList: []
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
         return state;
    case 'USER_RECEIVED':
         return { ...state, news: action.json[0], loading: false }
    default: 
         return state;
  }
 };
 export default reducer;