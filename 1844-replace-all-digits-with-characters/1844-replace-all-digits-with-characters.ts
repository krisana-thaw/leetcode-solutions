function replaceDigits(s: string): string {
    let i = 0;
    let res = [];
    const stringSplit = s.split('');
    while(i<s.length){
        if(!isNaN(Number(stringSplit[i]))){
            const charcode = (stringSplit[i-1].charCodeAt(0)) + Number(stringSplit[i]);
            res.push(String.fromCharCode(charcode));   
        }else{
            res.push(stringSplit[i]);
        }
        i+=1;    
    }
    return res.join('');
};