import { useState } from "react"
import { findUserByName } from "../service/Helpers"

const Lessons = ({lessons, users, postLesson, deleteLesson, updateLesson})=>{
    const [newLesson, setNewLesson] = useState({})
    const [lessonToEdit, setLessonToEdit] = useState({})
    const [editClicked, setEditClicked] = useState(false)
    
    const lessonsList = lessons.map(lesson=>{
        return(
            <tr key={lesson.id}>
                <td>{lesson.name}</td>
                <td>{lesson.capacity}</td>
                <td>{lesson.user.name}</td>
                <td><button onClick={()=>{deleteLesson(lesson)}}>Delete</button></td>
                <td><button onClick={()=>{editLesson(lesson)}}>Edit</button></td>
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

    const editLesson = (lesson)=>{
        if (lesson === lessonToEdit){
            cancelEditLesson()
        }
        else{
        setEditClicked(true)
        setLessonToEdit(lesson)
        }
    }
    const cancelEditLesson = ()=>{
        setEditClicked(false)
        setLessonToEdit({})
    }
    const onChangeEdit = (e)=>{
        const temp = lessonToEdit
        temp[e.target.id] = e.target.value
        setLessonToEdit(temp)
    }
    const submitEditLesson = (e)=>{
        e.preventDefault()
        const lessonUser = findUserByName(users, e.target[2].value)
        lessonToEdit.user = lessonUser
        updateLesson(lessonToEdit)
        e.target.reset()
        setLessonToEdit({})
        cancelEditLesson()
    }


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
                        <th>Edit</th>
                    </tr>
                    {lessonsList}
                </tbody>
            </table>
            <hr />
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
            <hr />
            {editClicked  ?
            <>
            <h2>Edit Lesson</h2>
            <form onSubmit={submitEditLesson}>
                <div>
                    <label htmlFor="name">Lesson Name: </label>
                    <input onChange={onChangeEdit} type="text" defaultValue={lessonToEdit.name} id="name"/>
                </div>
                <div>
                    <label htmlFor="capacity">Capacity: </label>
                    <input onChange={onChangeEdit} type="number" defaultValue={lessonToEdit.capacity} id="capacity"/>
                </div>
                <div>
                    <label htmlFor="user">User: </label>
                    <select id="user" defaultValue={lessonToEdit.user.name}>
                        {userOptions}
                    </select>                
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={cancelEditLesson} type="button">Cancel</button>
            </>
            :
            <></>}
        </>
    )
}
export default Lessons