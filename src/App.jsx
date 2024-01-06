import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Createtodo from './components/Createtodo'
import Displaytodo from './components/Displaytodo';



function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:5000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })

  

  return (
    <div>
      <Createtodo></Createtodo>
      <Displaytodo todos={todos}></Displaytodo>
    </div>
  )
}

export default App
