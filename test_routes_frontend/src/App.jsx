import { useState, useEffect } from 'react'
import './App.css'
import User from './assets/components/User'
import Lessons from './assets/components/Lessons'
import { deleteRoute, getIndex, postRoute, putRoute } from './assets/service/Service'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    getIndex('users').then(allUsers => {
      setUsers(allUsers)
    })
  }, [])

  const postUser = (data)=>{
    const temp = [...users]
    postRoute('users', data).then(user=>{
      temp.push(user)
      setUsers(temp)
    })
  }

  const deleteUser = (user)=>{
    const temp = [...users]
    const userId = temp.indexOf(user)
    temp.splice(userId, 1)
    deleteRoute('users/', user.id)
    .then(setUsers(temp))
  }

  const updateUser = (newUser, user)=>{
    const temp = [...users]
    const index = temp.indexOf(user)
    temp[index] = newUser
    putRoute('users/', newUser.id, newUser)
    .then(setUsers(temp))
  }

  return (
    <>
    <Router>
      <header>
        <h1>Testing</h1>
        <Link to="/">Users</Link>
        <Link to="/Lessons">Lessons</Link>
      </header>
      <Routes>
        
        {users ? 
        <>
        <Route path='/' element={<User 
        users={users} 
        postUser={postUser}
        deleteUser={deleteUser}
        updateUser={updateUser}/>}></Route>
        <Route path='/lessons' element={<Lessons/>}></Route>
        </>
        :
        <h1>Loading</h1>}
      </Routes>
    </Router>
    </>
  )
}

export default App
