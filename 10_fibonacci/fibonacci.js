const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let result = [0, 1];
    for (let i = 0; i < n; i++) {
        result.push(result[result.length-1] + result[result.length-2]);
    }
    return result[n];
};

// Do not edit below this line
module.exports = fibonacci;
