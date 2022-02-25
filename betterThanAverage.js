function betterThanAverage(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element
    });
    sum = sum / arr.length
    
    var count = 0
    arr.forEach(element=>{
        if(element > sum){
          count++  
        }
    })

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); //4