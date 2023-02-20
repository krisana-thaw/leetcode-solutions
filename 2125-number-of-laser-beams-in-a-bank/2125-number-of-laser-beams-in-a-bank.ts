function numberOfBeams(bank: string[]): number {
    let indexBank = 0;
    let bankCount = [];
    
    while(indexBank < bank.length){
        bankCount[indexBank] = (bank[indexBank].match(new RegExp("1", "g")) || []).length;
        indexBank++;
    }
    
    const stampCount = bankCount.filter(value => { return value > 0 });
    
    if(stampCount.length > 1){
        let sum = 0;
        let indexStamp = 0;
        while(indexStamp < (stampCount.length-1)){
            const diff = stampCount[indexStamp] * stampCount[indexStamp+1];
            sum += diff;
            indexStamp++;
        }
        return sum;
    }
    
    return 0;
};