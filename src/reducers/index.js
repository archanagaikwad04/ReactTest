import { SEARCH_USER } from '../actions';
import { RENDER_USER_LIST } from '../actions';
import { GET_NEWS } from '../actions';
const initialState = {
  userList: []
};

const reducer = (state = 'heeeee', action) => {
  switch (action.type) {
    case 'GET_NEWS':
         return state;
    case 'NEWS_RECEIVED':
         return { ...state, news: action.json[0], loading: false }
    default: 
         return state;
  }
 };
 export default reducer;