function thirdMax(nums: number[]): number {
    nums.sort((a, b) => { return b - a });
    const resultUnique = [...new Set(nums)];
    if(resultUnique.length < 3){
       return Math.max(...resultUnique);
    }
    return resultUnique[2];
};