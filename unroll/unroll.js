function unroll(squareArray) {
    const arr = [];
    const n = squareArray.length;

    for (let i = 0; i < n; i++) {

        arr.push(...squareArray[i].slice(i, n-i));

        for (let j = i + 1; j < n - i; j++) {
            arr.push(squareArray[j][n-i-1]);
        }

        for (let k = n - i - 2; k >= i; k--) {
            arr.push(squareArray[n - i - 1][k]);
        }

        for (let l = n - i - 2; l > i; l--) {
            arr.push(squareArray[l][i]);
        }
    }
    return arr;
}

module.exports = unroll;
