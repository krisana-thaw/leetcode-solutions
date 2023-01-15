function runningSum(nums: number[]): number[] {
    let sum = 0;
    let arr = nums.map(num => { 
        sum += num;
        return sum
    });
    return arr
};