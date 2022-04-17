import { useState } from 'react';
import './App.css';
import Form from "./components/Forms"

function App() {

  let name="Sumit Thakur"
  const [show, setShow] = useState(true);


  return (
    <div className="App">
   {show ? <Form/> : null}
   {/* <button onClick={()=>{
     setShow(!show)
   }}>{show ? 'Hide' : 'Show'} Forms </button> */}

    </div>
  );
  }

export default App;