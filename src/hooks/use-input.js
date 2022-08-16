import { useState } from 'react';

const useInput = (validation) => {
    const [ input, setInput ] = useState('');
    const [ touched, setTouched ] = useState(false);

    const isValid = validation(input);
    const error = touched && !isValid;

    const changeHandler = (event) => setInput(event.target.value);

    const touchHandler = () => setTouched(true);

    const reset = () => {
        setInput('');
        setTouched(false);
    }

    return {
        input: input,
        isValid: isValid,
        error: error,
        changeHandler: changeHandler,
        touchHandler: touchHandler,
        reset: reset  
    };
};

export default useInput;