// This function controls the entry providing the content, buttons and styling.
function Todoitem(props) {
    
    // The first 2 variables provide the text and whether the entry is completed. Could be removed and entered into the 
    // various fields as props.
    const condition = props.completed;
    const content = props.content;

    // Provides a boolean as to whether the edit button is selected and it's id is the same as this entry. 
    const buttonId = props.setButton === props.id;

    return (

        // Highlights the background of the entry but only if the completed state is true.
        <li className={`list-group-item ${condition && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                {/* Strikes through the entry but only if the completed state is true. */}
                <span className={`d-flex align-items-center ${condition && 'text-decoration-line-through'}`}>
                    {content}
                </span>
                <div className='d-flex justify-content-end'>

                    {/* Using a ternery the buttons will have a different style depending on the condition of the completed parameter
                    or whether the selected button is the one the user selected. */}
                    <button className={`btn  ${condition ? 'btn-success' : 'btn-outline-success'} me-3`} onClick={props.button3} value={props.id}>Completed</button>
                    <button className={`btn ${buttonId ? 'btn-secondary' : 'btn-outline-secondary'} me-3`} onClick={props.button1} value={props.id}>Edit</button>
                    <button className='btn btn-danger' onClick={props.button2} value={props.id}>Delete</button>
                </div>
            </div>
        </li>
    );
}

// This is exported to the toDoList file.
export default Todoitem;