import stateSchema from './stateSchema';
import tv4 from 'tv4';

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);
    // This code will be runned after the action has gone through all of the Redux Store;

    if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected');
    }
}