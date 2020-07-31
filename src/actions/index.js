export const SEARCH_USER = 'SEARCH_USER';
export const RENDER_USER_LIST = 'RENDER_USER_LIST';


export function searchUser(title) {
  console.log(title);
  return {
    
    type: SEARCH_USER,
   
  };
}

export function renderUSerList() {
    return {
      type: RENDER_USER_LIST
    };
  }

  export const getNews = () => ({
    type: 'GET_NEWS',
});
