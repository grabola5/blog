/* SELECTORS */

/* ACTIONS */

//action name createStore
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_POSTS = createActionName('LOAD_POSTS');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS});
/* INITIAL STATE */
const initialState=[];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return [ ...action.payload ];
    default:
    return statePart;
  }
};

export const getPosts = ({ posts }) => posts;
