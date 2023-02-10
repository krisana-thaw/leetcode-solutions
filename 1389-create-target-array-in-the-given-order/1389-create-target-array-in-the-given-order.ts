function createTargetArray(nums: number[], index: number[]): number[] {
    let i = 0;
    let result = [];
    while(i < nums.length){
        const indexReq = index[i];
        result.splice(indexReq, 0, nums[i]);
        i++;
    }
    return result;
};