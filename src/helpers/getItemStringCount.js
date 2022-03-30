function getItemStringUsingCount(data){
    return data.length===1 ? 'item' : 'items';
}

export default getItemStringUsingCount;