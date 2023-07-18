//Sum of Two numbers 

// const a , b  ;


const sum = (a,b =300)=>{
  return a + b ; 
} 
console.log(`Sum of two numbers are:  ${sum(100,44)}`)

// Simple Interest

const simpleInterest = (p,r,t)=>{
  return p*r*t /100
}

console.log(`Simple Interest is are:  ${simpleInterest(100,4,2)}`)


const average = (p,r,t)=>{
  return (p+r+t) /3
}
console.log(`Avarage of 3 numbers are:  ${average(200,200,200)}`)

const smallestNumber = (a,b)=> {
   if( a < b ) {
    return 'a is smaller than b'
   }  else {
     return 'b is smaller than a'
   }
  
}

console.log(`Smallest number of a and b are : ${smallestNumber(3,4)}`);

