const baseURL = 'http://localhost:8080/'

export const getIndex = (route)=>{
    return fetch(baseURL + route)
    .then(res=>res.json())
}

export const postRoute = (route, payload)=>{
    return fetch(baseURL + route, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res=>res.json())
}

export const deleteRoute = (route, id)=>{
    return fetch(baseURL + route + id, {
        method: 'DELETE'
    })
}

export const putRoute = (route, id, data)=>{
    return fetch(baseURL + route + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}