type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
        let i = functions.length, res = x;
        while(i > 0){
            res = functions[i-1](res);
            i--;
        }
        return res;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */