function reverse(arr) {
    let reversedArray = [];
    for(let i=arr.length-1;i>=0;i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); //["e", "d", "c", "b", "a"]