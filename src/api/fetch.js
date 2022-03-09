function handleSuccess(res){
    if(!res.ok){
        throw new Error(`status code ${res.status}  ${res.statusText}`)
    }
    return res.json();
}

function fetchData(url){
    return fetch(url)
        .then(handleSuccess)
}

export default fetchData;