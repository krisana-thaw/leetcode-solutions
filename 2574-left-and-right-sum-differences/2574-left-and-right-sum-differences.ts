function leftRightDifference(nums: number[]): number[] {
    let leftSum = 0;
    let rightSum = nums.reduce((sum,curr)=>sum += curr,0);

    return nums.map((curr,i)=>{
        rightSum -= curr;
        let res = Math.abs(leftSum - rightSum );
        leftSum += curr;
        return res
    });
};