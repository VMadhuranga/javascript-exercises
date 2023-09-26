const removeFromArray = function(arr, ...value) {
    for (let i of value) {
        if (arr.includes(i)) {
            arr.splice(arr.indexOf(i), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
