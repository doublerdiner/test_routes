export const findByName = (array, newName)=>{
    const answer = array.find((item) => item.name===newName)
    return answer
}