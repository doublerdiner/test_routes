export const findByName = (array, newName)=>{
    const answer = array.find((item) => item.name===newName)
    return answer
}

export const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }