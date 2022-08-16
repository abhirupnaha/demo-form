import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		input: firstName,
		isValid: firstNameIsValid,
		error: firstNameError,
		changeHandler: firstNameChangeHandler,
		touchHandler: firstNameTouchHandler,
		reset: firstNameReset
	} = useInput(value => value.trim().length > 2);

	const {
		input: lastName,
		isValid: lastNameIsValid,
		error: lastNameError,
		changeHandler: lastNameChangeHandler,
		touchHandler: lastNameTouchHandler,
		reset: lastNameReset
	} = useInput(value => value.trim().length > 2);

	const {
		input: email,
		isValid: emailIsValid,
		error: emailError,
		changeHandler: emailChangeHandler,
		touchHandler: emailTouchHandler,
		reset: emailReset
	} = useInput(value => value.includes('@'));

	const firstNameClass = firstNameError? 'form-control invalid' : 'form-control';
	const lastNameClass = lastNameError? 'form-control invalid' : 'form-control';
	const emailClass = emailError? 'form-control invalid' : 'form-control';

	const submitHandler = (event) => {
		event.preventDefault();
		let flag = 0;

		if(!firstNameIsValid) {
			firstNameTouchHandler();
			flag = 1;
		}
		if(!lastNameIsValid) {
			lastNameTouchHandler();
			flag = 1;
		}
		if(!emailIsValid) {
			emailTouchHandler();
			flag = 1;
		}

		if(flag === 1)
			return;

		console.log(firstName, lastName, email);
		firstNameReset();
		lastNameReset();
		emailReset();
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={firstNameClass}>
					<label htmlFor='firstName'>First Name</label>
					<input
						type='text'
						id='firstName'
						value={firstName}
						onChange={firstNameChangeHandler}
						onBlur={firstNameTouchHandler}
					/>
					{firstNameError && <p className="error-text"> First name should contain alteast 3 letters </p>}
				</div>
				<div className={lastNameClass}>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						id='lastName'
						value={lastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameTouchHandler}
					/>
					{lastNameError && <p className="error-text"> Last name should contain atleast 3 letters</p>}
				</div>
			</div>
			<div className={emailClass}>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					type='text'
					id='email'
					value={email}
					onChange={emailChangeHandler}
					onBlur={emailTouchHandler}
				/>
				{emailError && <p className="error-text"> Enter valid email. which includes @ </p>}
			</div>
			<div className='form-actions'>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
