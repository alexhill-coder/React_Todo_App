// Retrieves the data from the todoSlice state.
import { useSelector } from 'react-redux';

// A simple function that lets the user know the how many items have been completed.
function Totalitems() {
    
    // A counter that supplies the header with the required number.
    let counter = 0;

    // Retrieves the entries from the todoSlice state.
    const todos = useSelector((state) => state.todos.data);

    // Goes through the values and increases the counter every time it comes across a true completed state.
    for (const value of Object.values(todos)) {
        if (value.completed === true)
        counter++;
    }

    // Returns a header with the completed total.
    return (
        <h4 className='mt-3'>Total Complete Items: {counter}</h4>
    );
}
  
// This is then sent to the app file.  
export default Totalitems;