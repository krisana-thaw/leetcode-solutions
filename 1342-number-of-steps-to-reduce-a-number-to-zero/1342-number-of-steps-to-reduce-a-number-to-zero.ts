function numberOfSteps(num: number): number {
    let count = 0;
    
    while(num !== 0){
        if(num % 2 !== 0){
            num -= 1;
        }else{
            num /= 2;
        }
        count++;
    }
    return count;
};