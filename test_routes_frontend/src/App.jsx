import { useState, useEffect } from 'react'
import './App.css'
import User from './assets/components/User'
import Lessons from './assets/components/Lessons'
import Pupils from './assets/components/Pupils'
import { deleteRoute, getIndex, postRoute, putRoute } from './assets/service/Service'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([])
  const [lessons, setLessons] = useState([])
  const [pupils, setPupils] = useState([])

    const sleep = (ms)=>{
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    

    const getAllUsers = ()=>{getIndex('users').then(allUsers => {
      setUsers(allUsers)
    })}
    const getAllLessons = ()=>{getIndex('lessons').then(allLessons => {
      setLessons(allLessons)
    })}
    const getAllPupils = ()=>{getIndex('pupils').then(allPupils => {
      setPupils(allPupils)
    })}
  
  useEffect(()=>{
    getAllUsers()
    getAllLessons()
    getAllPupils()
  }, [])

  const postUser = (data)=>{
    const temp = [...users]
    postRoute('users', data).then(user=>{
      temp.push(user)
      setUsers(temp)
    })
  }

  const postLesson = (data)=>{
    const temp = [...lessons]
    postRoute('lessons', data).then(lesson=>{
      temp.push(lesson)
      setLessons(temp)
    })
  }

  const deleteUser = (user)=>{
    const temp = [...users]
    const collection = deleteItem(user, temp)
    deleteRoute(`users/`, user.id)
    .then(setUsers(collection))
    sleep(500).then(()=>{getAllLessons()})
  }
  const deleteLesson = (lesson)=>{
    const temp = [...lessons]
    const collection = deleteItem(lesson, temp)
    deleteRoute('lessons/', lesson.id)
    .then(setLessons(collection))
  }
  const deletePupil = (pupil)=>{
    const temp = [...pupils]
    const collection = deleteItem(pupil, temp)
    deleteRoute('pupils/', pupil.id)
    .then(setPupils(collection))
  }
  const deleteItem = (item, collection)=>{
    const id = collection.indexOf(item)
    collection.splice(id, 1)
    return collection
  }

  const updateUser = (newUser, user)=>{
    const temp = [...users]
    const index = temp.indexOf(user)
    temp[index] = newUser
    putRoute('users/', newUser.id, newUser)
    .then(setUsers(temp))
  }
  const updateLesson = (editedLesson)=>{
    const temp = [...lessons]
    const index = temp.find((lesson) => lesson.id === editedLesson.id)
    temp[index] = editedLesson
    putRoute('lessons/', editedLesson.id, editedLesson)
    .then(setLessons(temp))
    sleep(500).then(()=>{getAllPupils()})
  }

  return (
    <>
    <Router>
      <header>
        <h1>Testing</h1>
        <Link to="/">Users</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/pupils">Pupils</Link>
      </header>
      <Routes>
        
        {users ? 
        <>
        <Route path='/' element={<User 
        users={users} 
        postUser={postUser}
        deleteUser={deleteUser}
        updateUser={updateUser}/>}></Route>
        <Route path='/lessons' element={<Lessons
        lessons={lessons}
        users={users}
        pupils={pupils}
        postLesson={postLesson}
        deleteLesson={deleteLesson}
        updateLesson={updateLesson}/>}></Route>
        <Route path='/pupils' element={<Pupils
        pupils={pupils}
        deletePupil={deletePupil}/>
        }></Route>
        {/* <Route path={`/pupil/${pupil.id}`}></Route> */}
        
        </>
        :
        <h1>Loading</h1>}
      </Routes>
    </Router>
    </>
  )
}

export default App
