module.exports = function getZerosCount(number) {
    var result = 0;
    var i = 1;

    while (Math.pow(5, i) < number) {
        result = result + Math.floor(number / Math.pow(5, i));
        i++;
    }

    return result;
}

