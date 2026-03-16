var firstName = "Oleg";
var lastName = "Sanitskii";
var greeter = function (first, last) {
    return "Hello ".concat(first, " ").concat(last);
};
console.log(greeter(firstName, lastName));
