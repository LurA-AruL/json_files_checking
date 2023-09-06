import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([]);

  useState(() =>{
    getFunction();
  },[])

  function getFunction  () {
    fetch("http://localhost:5000/posts")
    .then(e => e.json())
    .then(res => {
      console.log(res);
      setData(res);
    });
  }
  return (
    <div className="App">
      <h1>try pannunga da</h1>
     {data.map(e => (
      <>
      <h1>{e.id}</h1>
      <h1>{e.title}</h1>
      </>
     ))}
    </div>
  );
}

export default App;
