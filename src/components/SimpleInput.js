import { useRef, useState } from 'react';

const SimpleInput = (props) => {
	const inputRef = useRef();
	const [ enteredValue, setEnteredValue ] = useState('');
	const [ inputTouch, setInputTouch ] = useState(false);
	const [ formIsValid, setFormIsValid ] = useState(false);

	const changeHandler = (event) => {
		setEnteredValue(event.target.value);
	}

	const blurHandler = (event) => {
		setInputTouch(true);
		if(enteredValue.trim().length < 1) {
			setFormIsValid(false);
			return;
		}
		setFormIsValid(true);
	}

	const submitHandler = (event) => {
		event.preventDefault();
		setInputTouch(true);
		
		if(enteredValue.trim().length < 2) {
			setFormIsValid(false);
			return;
		}
		setFormIsValid(true);

		console.log(enteredValue);
		console.log(inputRef.current.value);
	}

	const inputIsValid = inputTouch? formIsValid : true;

	const inputClass = inputIsValid? 'form-control' : 'form-control invalid';

	return (
		<form onSubmit={submitHandler}>
			<div className={inputClass}>
				<label htmlFor='name'>Your Name</label>
				<input
					ref={inputRef}
					type='text'
					id='name'
					value={enteredValue}
					onChange={changeHandler}
					onBlur={blurHandler}
				/>
			</div>
			{!inputIsValid && <p className="error-text"> input length should be more than 1 </p>}
			<div className="form-actions">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;