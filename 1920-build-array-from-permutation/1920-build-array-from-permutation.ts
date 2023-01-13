function buildArray(nums: number[]): number[] {
    const dumpNums = nums;
    const res = dumpNums.map((value, index) => {
        return nums[nums[index]];
    });
    return res
};