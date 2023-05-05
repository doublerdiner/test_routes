export const findUserByName = (users, newName)=>{
    const answer = users.find((user) => user.name===newName)
    return answer
}