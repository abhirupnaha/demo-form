import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
        input: enteredValue,
        isValid: isValid,
		error: error,
        changeHandler: changeHandler,
        touchHandler: blurHandler,
        reset: reset  
    } = useInput(input => input.trim().length > 2);

	const submitHandler = (event) => {
		event.preventDefault();
		reset();
		blurHandler();
		if(!isValid)
			return;
		console.log(enteredValue);
	}

	const inputClass = error? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={submitHandler}>
			<div className={inputClass}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					value={enteredValue}
					onBlur={blurHandler}
					onChange={changeHandler}
				/>
			</div>
			{error && <p className="error-text"> field should contain atleast 3 letters </p>}
			<div className="form-actions">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;