import { Link } from "react-router-dom"

const Pupils = ({pupils, deletePupil})=>{

    const pupilsList = pupils.map(pupil=>{
        return(
            <tr key={pupil.id}>
                <td>{pupil.name}</td>
                <td>{pupil.yearGroup}</td>
                <td onClick={()=>{deletePupil(pupil)}}><button>Delete</button></td>
                {/* <td><button onClick={<Link></Link>}>View</button> </td> */}
            </tr>
        )
    })

    
    return(
        <>
        <hr />
        <h2>Pupils:</h2>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Delete</th>
                    <th>View</th>
                </tr>
                {pupilsList}
            </tbody>
        </table>
        <hr />

        </>
    )
}
export default Pupils