import { useState } from "react"

const User = ({users, postUser, deleteUser, updateUser})=>{
    const [newUser, setNewUser] = useState({})

    const userRow = users.map(user=>{
        return(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td><button onClick={()=>{deleteUser(user)}}>delete</button></td>
                <td><button onClick={()=>{onClickAge(user, 1)}}>+</button></td>
                <td><button onClick={()=>{onClickAge(user, -1)}}>-</button></td>
            </tr>
        )
    })

    const onSubmitUser = (e)=>{
        e.preventDefault()
        postUser(newUser)
        e.target.reset()
    }

    const onChange = (e)=>{
        const update = newUser
        update[e.target.id] = e.target.value
        setNewUser(update)
    }

    const onClickAge = (user, num)=>{
        const newUser = user
        newUser.age += num
        updateUser(newUser, user)
    }

    return (
        <>
            <hr/>
            <h2>User Details:</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Delete</th>
                        <th>Increase Age</th>
                        <th>Decrease Age</th>
                    </tr>
                    {userRow}
                </tbody>
            </table>
            <h2>Add User:</h2>
            <form onSubmit={onSubmitUser}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" onChange={onChange} required/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default User