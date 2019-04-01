export default ({ dispatch }) => (next) => (action) => {
    //Check to see if the action has a payload or payload it is a Promise
    if (!action.payload || !action.payload.then) {
        // If it doesn`t, then send the action to the next middleware
        return next(action);
    }
    // If it does - then wait resolving of Promise, then
    // Get its data and create new action with that data, and dispatch it
    // dispatch sends action to the all chain again
    action.payload.then(function (response) {
        const newAction = { ...action, payload: response }; //get all from old action and override payload
        dispatch(newAction);
    });

};


// Refactored From:
// export default function ({ dispatch }) {
//     return function (next) { //next - reference to the next middleware on our chain
//         return function (action) {
//          *CODE*
//         }
//      *CODE*
//     }
// };