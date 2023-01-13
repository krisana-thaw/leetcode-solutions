function sortPeople(names: string[], heights: number[]): string[] {
    interface dataPerson {
        name: string;
        height: number;
    }

    let newData: dataPerson[] = [];

    for (let i in names) {
        newData.push({ name: names[i], height: heights[i] })
    }

    const merge = (left: dataPerson[], right: dataPerson[]) => {
        let result: dataPerson[] = [];

        while (left.length > 0 || right.length > 0) {
            if (left.length > 0 && right.length > 0) {
                if (left[0].height > right[0].height) {
                    result.push(left[0]);
                    left.shift();
                } else {
                    result.push(right[0]);
                    right.shift();
                }
            }

            else if (left.length > 0) {
                result.push(left[0]);
                left.shift();
            }

            else if (right.length > 0) {
                result.push(right[0]);
                right.shift();
            }
        }
        return result;
    };

    const mergeSort = (listNum: dataPerson[]) => {
        if (listNum.length <= 1) return listNum;

        const middleIndex = Math.ceil(listNum.length / 2);
        let arrLeft = listNum.slice(0, middleIndex);
        let arrRight = listNum.slice(middleIndex);

        arrLeft = mergeSort(arrLeft);
        arrRight = mergeSort(arrRight);

        return merge(arrLeft, arrRight);
    };

    const res = mergeSort(newData)
    return res.map((data) => {return data.name});
};