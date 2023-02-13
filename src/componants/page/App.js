// Retrieves css information to propably style the page. 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

// Retrieves the componants to be created on the page.
import Addtodoform from '../javascript/addToDoForm';
import Todolist from '../javascript/toDoList';
import Totalitems from '../javascript/totalItems';

// Retrieves the hooks, redux functions.
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo, alterToDo, alterCompletion, deleteEntry } from '../../redux/toDoSlice';

// Due to some of the functions requiring access to certain varaiables across the pages most of the functions are placed here and 
// passed down through props. This could have been resolved by adding parameters to the todoSlice initialstate but the task was unclear 
// as to whether this was permissable. 
function App() {

  // Using hooks the input box button will either add to an entry or edit it depending on the whether this state is false or true.
  const [button, setButton] = useState(false);

  // This hook contains the id of the edit button selected.
  const [buttonHighLight, setButtonHighLight] = useState(0);

  // This hook contains the value of the input box.
  const [value, setValue] = useState("");

  // Used to shorten the function.
  const dispatch = useDispatch();

  // When the input field button is selected depending on the hook condition will either
  // add an entry or alters its text.
  const onSubmit = (event) => {

		event.preventDefault();

    // If true will alter an entry supplying the new text and the id to locate the selected entry.
    // It will also reset the edit button conditions to ensure that the user doesn't have click the
    // edit button again to deactivate this function. 
		if (button === true) {
			dispatch(alterToDo({
				content: value,
				id: buttonHighLight
			}))
      setButtonHighLight(0);
      setButton(false);
		}

    // If false will only send the text as the id/completed parameters are set in the todoSlice function.
		else {
			dispatch(addToDo({
			content: value,
		}))}

    // Everytime the input field button is clicked it is cleared after the information has been sent. 
		setValue("");
	};

  // Provided to the input box to change the hook everytime a change is detected.
  function setNewValue(event) {
    setValue(event.target.value);
  }

  // Controls the style of the edit button.
  function editButton(event) {

    // If no edit button is active when clicked it will alter the input field/button and insert the 
    // value of the edit button selected.
    if(button === false) {
      setButton(!button);
      setButtonHighLight(event.target.value);
    }
    
    // If an edit button is active and it matches the current button it will set the fields/buttons to their default 
    // settings. 
    else if (button === true && buttonHighLight === event.target.value) {
      setButton(!button);
      setButtonHighLight(0);
    }

    // If an edit button is active but not the one selected it will get the value of the last edit button selected.
    else if (button === true && buttonHighLight > 0) {
      setButtonHighLight(event.target.value);
    }  
  }

  // When the complete button is clicked it sends the value of the button selected to the corresponding function in the toDoSlice file. 
  function completeEntry(event) {

    dispatch(alterCompletion({
      id: event.target.value
    }))
  }

  // When the delete button is pressed the value of the button (which is the key of the entry) is sent to the corresponding function 
  // in the toDoSlice file.
  function removeEntry(event) {
    dispatch(deleteEntry({
      id: event.target.value
    }))

    // To prevent an error where if the edit button is selected before it is deleted it will still try to edit the now non-existing
    // entry by setting the edit buttons parameters to their default settings. 
    setButton(false);
    setButtonHighLight(0);
  }

  // Displays all the componants of the site. All of the functions are either passed onto the componant or into a secondary componant.
  return (
    <div className='App container bg-white p-4 mt-5'>
      <h1>React/Redux Todo List</h1>
      <Addtodoform bool={button} onSubmit={onSubmit} value={value} setValue={setNewValue} />
      <Todolist button1={editButton} button2={removeEntry} button3={completeEntry} setButton={buttonHighLight} />
      <Totalitems />
    </div>
  );
}

// This is then sent to the index file.
export default App;

// This task was based on the video tutorial about the ways Redux Toolkit can be used for a simple
// todo app using array objects/api's provided by: 
// Chris Blakely. (2021, April 7). React Redux Todo App Tutorial | Learn Redux with Redux Toolkit [Video]. 
// YouTube. https://www.youtube.com/watch?v=fiesH6WU63I