function shuffle(nums: number[], n: number): number[] {
    let numbers = []
    for(let i =0 ; i< n ; i++){
        numbers.push(nums[i], nums[i+n]);
    }
    return numbers
};