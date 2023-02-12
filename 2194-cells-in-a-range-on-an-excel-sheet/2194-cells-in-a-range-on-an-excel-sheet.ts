function cellsInRange(s: string): string[] {
    const cellSplit = s.split(":");
    const startCol = cellSplit[0].split('')[0];
    const startRow = Number(cellSplit[0].split('')[1]);
    const endCol = cellSplit[1].split('')[0];
    const endRow = Number(cellSplit[1].split('')[1]);
    
    const result = [];
    let i: number =  startCol.charCodeAt(0);
    const endCharCode = endCol.charCodeAt(0);
    
    while(i <= endCharCode){
        for(let j = startRow; j <= endRow; j++){
            result.push(String(String.fromCharCode(Number(i))+j));
        }
        i++;
    }
    
    return result;
};