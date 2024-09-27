//declaring const variables 
const ages = [25, 31, 42, 77];

//using map function 
let d = ages.map((item)=>{
    
    //if item is less than 70 multiply * 2
    if(item < 70){
    return item * 2;}
    
    //if item is over 70 return as normal
    else {
    return item;
    }
})

//outputting answer
console.log(d);