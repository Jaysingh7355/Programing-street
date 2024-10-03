//Even-odd
// function even_odd(numbers){
    
//         if(numbers%2 === 0){
//             console.log(numbers + "Even number");   
//         }else{
//             console.log(numbers + "Odd Number")
//         }
    
//     }

//     even_odd(8);




function even_odd(...numbers){
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]%2 === 0){
        console.log(numbers[i]+"Even number");   
    }else{
        console.log(numbers[i]+"Odd Number")
    }
}
}


// even_odd(2,8,9,6)