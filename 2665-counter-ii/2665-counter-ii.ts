type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let result = init;
    const increment = () => {
        return result+=1;
    }
    
    const decrement = () => {
        return result-=1;
    }
    
    const reset = () => {
        return result = init;
    }
    
    return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */