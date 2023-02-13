// Retrieves the store componant and the slice state/functions from the toDoSlice file.
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './toDoSlice'

// Creates the store function. Which is sent to the index file.
export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});
