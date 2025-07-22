import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //  const[firstName, setFirstName] = useState("");
  //  const[lastName,setLastName] = useState("");


  // function changeFirstNameHandler(event){
  //   // console.log("printing first name")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }

  // function changeLastNameHandler(event){
  //   // console.log("printing last name")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)
  // }

  const[formData,setFormData] = useState( {firstName:"", lastName:"", comments:"", inVisible: true, mode:"", favCar:""});
  console.log(formData)

  function changeHandler(event) {
    const {name,value,checked,type} = event.target
     setFormData( prevFormData =>{
      return {
        ...prevFormData, [name]: type ==="checkbox" ? checked: value
      }
     })
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("printing the form data......");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="first name"
        onChange={changeHandler} name="firstName" value={formData.firstName}/> 
        <br/>
        <br/>
    
       <input type="text" placeholder="last name"
        onChange={changeHandler} name="lastName" value={formData.lastName}/> 

        <br/>
        <br/>

        <textarea
        placeholder='enter comments' onChange={changeHandler} name="comments" value={formData.comments}
        />
        <br/>
        <br/>

        <input type="checkbox" name='inVisible' id='inVisible' onChange={changeHandler} checked = {formData.inVisible}/>
        <label htmlFor='inVisible'>inVisible?</label>

        <br/>
        <br/>

        <input type="radio" onChange={changeHandler} name="mode" value="online mode" id="online mode" checked = {formData.mode === "online mode"}/>
        <label htmlFor='online mode'>online mode</label>

        <br/>
        <br/>

        <input type="radio" onChange={changeHandler} name="mode" value="offline mode" id="offline mode" checked = {formData.mode === "offline mode"}/>
        <label htmlFor='online mode'>offline mode</label>

        <br/>
        <br/>
        
        <label htmlFor='favCar'>Favourite Car</label>
        <select name='favCar' id='favCar' value={formData.favCar} onChange={changeHandler}>
            <option value="scorpio">Scorpio</option>
            <option value="fortuner">fortunor</option>
            <option value="brezza">brezza</option>
            <option value="swift">swift</option>
            <option value="defender">defender</option>
        </select>
       <br/>
       <br/>

       <button>submit</button>
      </form>
    </div>
  );
}

export default App;
