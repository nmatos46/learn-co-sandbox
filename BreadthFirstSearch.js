const collections = [1, [2, [4, [5, [6]], 3]]]

var inputFn = function(n){
  return typeof n === 'number' && n>5
}

var inputFn1 = function(n){
  return n > 5
}

function find(array,inputFn){
  let current = array
  let next = []
  
  
  while (current){
    //while current is not empty
    
    if (inputFn(current)){
      //if current meets criteria defined in criteriaFn
      return current
    }
    
    if (Array.isArray(current)){
      //if current is an array, iterate through the array
      for (let i=0; i<current.length; i++){
        //record array contents to be evaluated with while loop iteration
        next.push(current[i])  
      }
    }
    
    //record the next element to be evaluated in a while loop
    current = next.shift()
  }
  
  //since we haven't found any elements that meet the criteria
  return null
  
  
}

var foundItem = find(collections, inputFn)
console.log(foundItem)