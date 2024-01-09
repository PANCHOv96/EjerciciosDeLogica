export function FizzBuzz(num){
    const mult5 = num % 5 == 0;
    const mult3 = num % 3 == 0;
    if(mult5 && mult3){
        return 'FizzBuzz'
    }
    if(mult3){
        return 'Fizz'
    }
    if(mult5){
        return 'Buzz'
    }
    return num
}

export function SearchFizzBuzz(){
    for(let i = 1; i <= 100 ; i++){
        console.log(FizzBuzz(i))
    }
}
