function separateDigits(nums: number[]): number[] {
    let res = [];
    for(let num of nums){
        const numSplit = String(num).split('').map(Number);
        res = [...res, ...numSplit];
    }
    return res;
};