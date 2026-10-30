export function rangeSum(a, b) {
    let result = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }

    return result;
}

export function iterationCount(num) {
    let count = 0;
    let value = num;

    while (value > 0.1) {
        value = value / 2;
        count++;
    }

    return count;
}

export function symbolsReplace(str) {
    let result = '';
    let i = 0;

    do {
        if ((i + 1) % 3 === 0) {
            result += '_';
        } else {
            result += str[i];
        }
        i++;
    } while (i < str.length);

    return result;
}
