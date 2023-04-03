import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  let [enteredValue, setEnteredValue] = useState('');
  const [isValid,setisValid]=useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setisValid(true)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisValid(false)
      enteredValue="nothing"
    }
    props.onAddGoal(enteredValue);

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid":""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" kb={isValid} >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
