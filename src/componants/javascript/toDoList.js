// Retrieves the entry componant and the selector for the data.
import Todoitem from './toDoItem';
import { useSelector } from 'react-redux';

// Retrieves the entry data and creates/styles them on the page.
function Todolist(props) {

    // An array to store the new objects. 
    let itemArray = [];

    // Retreieves all the entries from the todos slice state.
    const todos = useSelector((state) => state.todos.data);

    // Goes through each entry & places the key/value into a new object and inserts them into a array.
    for (const [key, value] of Object.entries(todos)) {

        const itemObject = { id: key, content: value.content, completed: value.completed };

        itemArray.push(itemObject);
    }

    // This returns each entry from the state and creates them onpage.
    return (
      <ul className='list-group'>

        {/* Due to issues creating the entries it was found to be easier to reformat the retrieved entries and use a map
        to create them. As some of the button functions required access to variables from other files all the functions are passed on
        from the app file to the toDoItem file. */}
        {itemArray.map((item) => (
            <Todoitem key={item.id} id={item.id} content={item.content} completed={item.completed} 
            button1={props.button1} button2={props.button2} button3={props.button3} setButton={props.setButton} />
        ))}

      </ul>
    );
}
  
// This is then sent to the app file.
export default Todolist;