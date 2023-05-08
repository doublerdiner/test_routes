const LessonList = ({lessons})=>{
    
    const lessonList = lessons.map(lesson=>{
        return(
            <tr key={lesson.id}>
                <td>{lesson.name}</td>
                <td>{lesson.year}</td>
                <td>{lesson.user.name}</td>
            </tr>
        )
    })

    return(
        <>
        {lessonList}
        </>
    )
}
export default LessonList