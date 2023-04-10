import React,{ useState,useEffect } from 'react'
import {TiPlusOutline} from 'react-icons/ti'
import Todo from './Todo'
import {db} from './firebase'
import {query, collection, onSnapshot, QuerySnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button:  `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`
}


function App() {

  const [todos, settodos] = useState([])
  const [input, setInput] = useState('')

  // create from firebase

  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input === '') {
      alert('Please enter a valid todos')
      return
    }

    await addDoc(collection(db, 'todos'),{
      text: input,
      completed: false
    })

    setInput('')

  }

  // read from firebase
  useEffect(() => {
      const q = query(collection(db, 'todos'))
      const unsubscribe = onSnapshot(q,(QuerySnapshot) => {
        let todoArr = []
        QuerySnapshot.forEach((doc) => {
          todoArr.push({...doc.data(), id: doc.id})
        });
        settodos(todoArr)
      })
      return () => unsubscribe()
  }, [])



  // update from firebase
  const toogleComplete = async (todo) => {
    await updateDoc(doc(db,'todos', todo.id), {
      completed: !todo.completed
    })
    
  }

  // delete from firebase
  const deletetodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  } 


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input type="text" className={style.input} value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add Todos'/>
          <button className={style.button}><TiPlusOutline size={30}/></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
              <Todo key={index} todo={todo} toogleComplete={toogleComplete} deletetodo={deletetodo}/>
          ))}
          
        </ul>
        {todos.length < 1 ? null : <p className={style.count}>{`You have ${todos.length} todos`}</p>}
        
      </div>
    </div>
  )
}

export default App
