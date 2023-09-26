const palindromes = function(string) {
    let reg = /[\W_]/g
    let compare = string.toLowerCase()
                        .replaceAll(reg, "")
                        .split("")
                        .reverse()
                        .join("");

    return (string.toLowerCase().replaceAll(reg, "") === compare) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
