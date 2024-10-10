//interface---> using functions
var format;
format = function (input, isUpper) {
    return isUpper ? input.toUpperCase() : input.toLowerCase();
};
console.log(format("nithu", true));
