function highPass(arr, cutoff) {
    var filteredArr = [];

    arr.forEach(element=> {if(cutoff < element){
        filteredArr.push(element)
    }})
    
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); //[6, 8, 10, 9]