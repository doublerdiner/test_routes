import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { sleep } from "../service/Helpers"
import { findByName } from "../service/Helpers"

const PupilView = ({pupils, allLessons, updatePupil, removePupil})=>{
    const[pupil, setPupil] = useState({})
    const [lessons, setLessons] = useState([])
    const[lessonClick, setLessonClick] = useState(false)
    const { id } = useParams()
    
    useEffect(()=>{
        const getPupil = ()=>{
        const thisPupil = pupils.find((indi)=>indi.id == id)
        setPupil(thisPupil)
        sleep(500).then(()=>{setLessons(thisPupil.lessons)})
        }
        getPupil()
        
    }, [pupils])

    const mapLessons = lessons.map(lesson=>{
        return(
            <tr key={lesson.id}>
                <td>{lesson.name}</td>
                <td>{lesson.capacity}</td>
                <td>{lesson.user.name}</td>
                <td><button onClick={()=>{removePupil(lesson, pupil)}}>Delete</button></td>
            </tr>
        )
    })


    const addLessonClick = ()=>{
        setLessonClick(!lessonClick)
    }

    const submitLesson = (e)=>{
        e.preventDefault()
        const temp = pupil
        const thisLesson = findByName(allLessons, e.target[0].value)
        temp.lessons.push(thisLesson)
        updatePupil(temp)
    }

    const mapThis = (array)=>{
        const mapThisName = array.map(item=>item.name)
        return mapThisName.sort()
    }


    const lessonOptions = mapThis(allLessons).map((name, i)=>{return <option key={i}>{name}</option>})

    return(
        <>
        <hr />
        <h2>Pupil: {id}</h2>
        {pupil ?
        <>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Add Lesson</th>
                </tr>
                <tr>
                    <td>{pupil.name}</td>
                    <td>{pupil.yearGroup}</td>
                    <td><button onClick={addLessonClick}>+</button></td>
                </tr>
            </tbody>
        </table>
        <h2>{pupil.name}'s Lessons: </h2>
        <table>
            <tbody>
                <tr>
                    <th>Lesson</th>
                    <th>Capacity</th>
                    <th>Teacher</th>
                    <th>Delete</th>
                </tr>
                {lessons.length > 0 ? 
                <>
                {mapLessons}
                </>
                :<></>
                }
            </tbody>
        </table>
        <hr />
        {lessonClick ? 
        <>
        <h2>Add Lesson To Pupil:</h2>
        <form onSubmit={submitLesson}>
        <div>
            <label htmlFor="lesson">Lesson: </label>
            <select id="lesson">
                {lessonOptions}
            </select>                
        </div>
        <button type="submit">Submit</button>
        </form>
        </>:
        <></>}
        </>
        :<></>}
        </>
    )
}
export default PupilView