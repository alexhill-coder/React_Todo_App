// This creates the input field and button that allows the user to either add or edit an entry.
function Addtodoform(props) {

    return (

		// Due to different files requiring access to the edit informaiton the function that controls this 
		// form is located in the app file. 
        <form onSubmit={props.onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'

				// Depending on whether the edit button has been selected the field will ask
				// the user to add or edit an entry.
				placeholder={props.bool ? 'Edit entry...' : 'Add todo...'}
				value={props.value}
				onChange={props.setValue}
			></input>

				{/* Depending on whether the edit button has been selected the button will say
				add or edit. */}
			<button type='submit' className='btn btn-primary mb-2'>
				{props.bool ? 'Edit' : 'Add'}
			</button>
		</form>
    );
}
  
// This file is sent to the app file.
export default Addtodoform;
