function diagonalSum(mat: number[][]): number {
    if(mat.length !== 1){
        const lastIndex = mat.length-1;
        let arr = [];
        let prevIndex = 0;
        for(let i = 0; i < mat.length; i++){
            for(let j = 0; j < mat[i].length; j++){
                if(i === j){
                   arr.push(mat[i][j]);
                }
                else if((mat[i].length-1) - prevIndex === j){
                   arr.push(mat[i][j]);
                }
            }
            prevIndex+=1;
        }
        const res = arr.reduce(function(acc, val) { return acc + val; }, 0);
        return res;
    }else{
        return mat[0][0];
    }
};