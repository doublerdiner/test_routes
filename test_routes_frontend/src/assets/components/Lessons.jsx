import { useState } from "react"
import { findUserByName } from "../service/Helpers"

const Lessons = ({lessons, users, postLesson, deleteLesson})=>{
    const [newLesson, setNewLesson] = useState({})
    
    const lessonsList = lessons.map(lesson=>{
        return(
            <tr key={lesson.id}>
                <td>{lesson.name}</td>
                <td>{lesson.capacity}</td>
                <td>{lesson.user.name}</td>
                <td><button onClick={()=>{deleteLesson(lesson)}}>Delete</button></td>
            </tr>
        )
    })

    const userNames = users.map(user=>user.name)
    const sortedNames = userNames.sort()
    const userOptions = sortedNames.map((name, i)=>{
        return (
            <option key={i}>{name}</option>
        )
    })

    const submitLesson = (e)=>{
        e.preventDefault()
        const lessonUser = findUserByName(users, e.target[2].value)
        const temp = newLesson
        temp.user = lessonUser
        postLesson(temp)
        e.target.reset()        
    }
    const onChange = (e)=>{
        const temp = newLesson
        temp[e.target.id] = e.target.value
        setNewLesson(temp)
    }

    return(
        <>
        <hr />
        <h2>Lessons:</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Capacity</th>
                        <th>User Name</th>
                        <th>Delete</th>
                    </tr>
                    {lessonsList}
                </tbody>
            </table>
            <h2>Add Lesson</h2>
            <form onSubmit={submitLesson}>
                <div>
                    <label htmlFor="name">Lesson Name: </label>
                    <input onChange={onChange} type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="capacity">Capacity: </label>
                    <input onChange={onChange} type="number" id="capacity"/>
                </div>
                <div>
                    <label htmlFor="user">User: </label>
                    <select id="user">
                        {userOptions}
                    </select>                
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Lessons