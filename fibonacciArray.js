function fibonacciArray(n) {
    var fibArr = [0, 1];

    for(i=0;i<n;i++){
        let newNum = fibArr[i] + fibArr[i+1]
        fibArr.push(newNum)
        if(fibArr.length == n){
            break
        }
    }
    
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]