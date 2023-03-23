function numOfStrings(patterns: string[], word: string): number {
    let i = 0, count = 0;
    while(i<patterns.length){
        if(word.includes(patterns[i])){
           count+=1;
        }
        i+=1;
    }
    return count;
};