function linearSearch(arr, val){
    for(var i=0; i<arr.length; i++){
        if(arr[i] === val){
            return i;
        }
}
return -1;
}

function add(a,b){
    return a+b;
}

module.exports = {linearSearch, add};