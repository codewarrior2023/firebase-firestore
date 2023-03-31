import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { db } from './firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo')
      return
    } else {
      await addDoc(collection(db, 'todos'), {
        text: input,
        completed: false,
      })
      setInput('')
    }
  }

  // read todo

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])

  // update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })

  }

  // delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    <div>
      <div>
        <h3> Todo App </h3>
        <form onSubmit={createTodo}>
          <input type="text" placeholder="Add Todo" value={input} onChange={(e) => {setInput(e.target.value)}} />
          <button>Submit</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>

          ))}
        </ul>
        {todos.length < 1 ? null : <p> You have {todos.length} todos </p> }
      </div>
    </div>
  );
}

export default App;
