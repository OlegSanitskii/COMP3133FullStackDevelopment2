let firstName: string = "Oleg";
let lastName: string = "Sanitskii";

let greeter = (first: string, last: string): string => {
    return `Hello ${first} ${last}`;
};

console.log(greeter(firstName, lastName));