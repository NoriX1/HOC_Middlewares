import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};

<<<<<<< HEAD
export const fetchComments = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');
    dispatch({ type: FETCH_COMMENTS, payload: response });
=======
export const fetchComments = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');
    return { type: FETCH_COMMENTS, payload: response };

>>>>>>> Middlewares
}

export const changeAuth = (isLoggedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}