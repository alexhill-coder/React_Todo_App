// Retrieves the slice componant from the toolkit.
import { createSlice } from '@reduxjs/toolkit';

// Provides the data and functions needed to alter the data.
const todoSlice = createSlice({

    // Provides the name of the section.
    name: "todos",
  
    // Provides the intialstate as needed by the task.
    initialState: {
        nextId: 2,
        data: {
            1: {
                content: 'Content 1',
                completed: false
            }
        }
    },

    // Provdes the functions needed to alter the state parameters.
    reducers: {

        // Uses the current state data and the action to create a new object/entry in the data object.
        addToDo: (state, action) => {
            
            // The retrieved text is placed as the content parameter, while completed is set to the default of
            // false. 
            const newToDo = {
                content: action.payload.content,
                completed: false
            };

            // The object is then inserted into the state using the nextId number to provide the key for the object.
            state.data[state.nextId] = newToDo;

            // The nextId is then increased to provide a different key to the next added object.
            state.nextId += 1;

        },

        // This retrieves the value of the button to select the key of the entry and replaces it with the retrieved
        // text.
        alterToDo: (state, action) => {

            state.data[action.payload.id].content = action.payload.content;

        },

        // This retrieves the value of the button to select the key of the entry and alters the boolean to its opposite.
        alterCompletion: (state, action) => {

            state.data[action.payload.id].completed = !state.data[action.payload.id].completed;

        },

        // This retrieves the value of the button to select the key of the entry and removes the entry with the
        // delete keyword.
        deleteEntry: (state, action) => {
            delete state.data[action.payload.id];
        }
    },
});

// Used to the app file where the functions can be called via button select.
export const { addToDo, alterToDo, alterCompletion, deleteEntry } = todoSlice.actions;

// This is then sent to the store file.
export default todoSlice.reducer;