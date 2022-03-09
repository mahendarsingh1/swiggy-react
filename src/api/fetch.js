function fetchData(url){
    return fetch(url)
        .then(function getJsonFromResponse(res){
            return res.json()
        })
        .catch(function logError(err){
            console.log(err)
        })
}

export default fetchData;