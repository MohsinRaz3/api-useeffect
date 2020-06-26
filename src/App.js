import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  let data = {title: "Waiting for data"};
  const [todo,setTodo] = useState(data);
  const [isData,setData] = useState(false);
  const [isFetching, setFetching] = useState(false);



  useEffect(()=>{

    async function fetchData(){
      setFetching(true);

    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data2 = await response.json()
    setTodo(data2);
    setFetching(false);

    console.log(todo); 
  }

    fetchData();
  },[isData]);

  if (isFetching){
    return <div>Please wait Data is loading...</div>
    
  }



  return (
    <div>
      <h2>Title: {todo.title} </h2>
    
    
    </div>
  );
}

export default App;
