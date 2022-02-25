function alwaysHungry(arr) {
    let counter = 0
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="comida"){
            console.log("delicioso")
            counter ++
        }
    }
    
    if(counter == 0){
        console.log("Tengo hambre")
    }
}
   
alwaysHungry([3.14, "comida", "pastel", true, "comida"]); //"delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);//"Tengo hambre"