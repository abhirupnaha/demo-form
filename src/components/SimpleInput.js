import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
	const [ enteredValue, setEnteredValue ] = useState('');
	const [ inputTouched, setInputTouched ] = useState(false);
	// to enable/disable submit button
	const [ formIsValid, setFormIsValid ] = useState(false);

	const inputIsValid = (enteredValue.trim().length > 2);
	const isValid = inputTouched? inputIsValid : true;
	const inputClass = isValid? 'form-control' : 'form-control invalid';

	useEffect(() => {
		if(inputIsValid)
			setFormIsValid(true);
		else
			setFormIsValid(false);
	}, [inputIsValid])

	const changeHandler = (event) => setEnteredValue(event.target.value);

	const blurHandler = () => setInputTouched(true);

	const submitHandler = (event) => {
		event.preventDefault();
		setInputTouched(true);
		
		if(!inputIsValid)
			return

		console.log(enteredValue);
		setEnteredValue('');
		setInputTouched(false);
	};

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
			{!isValid && <p className="error-text"> field should contain atleast 3 letters </p>}
			<div className="form-actions">
				<button type="submit" disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;