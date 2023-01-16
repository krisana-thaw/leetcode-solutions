function maximumWealth(accounts: number[][]): number {
    let maxVal = 0;
    for(const setVal of accounts){
        const currentVal = eval(setVal.join("+"))
        maxVal = (maxVal <= currentVal ? currentVal : maxVal);
        
    }
    return maxVal
};