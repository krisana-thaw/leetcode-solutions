function differenceOfSum(nums: number[]): number {
    let sumElement: number = 0, sumDigit: number = 0;
    while(nums.length > 0){
        sumElement += Number(nums[0]);
        let digits = nums[0].toString().split('').map(Number);
        while(digits.length > 0){
            sumDigit += digits[0];
            digits.shift();
        }
        nums.shift();
    }
    return Math.abs(sumElement-sumDigit)
};