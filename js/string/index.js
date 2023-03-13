// let name = '"John"';

let name = '\"\'John\'\"';
let name2 = "'John'";
let name3 = `"'John'"`; // template string

console.log(name, typeof name);
console.log(name2, typeof name2);
console.log(name3, typeof name3);

let username = "They"
let place = "school"
let plural = ""

// let description = username + middle + place
let description = `${username} go${plural} to ${place}`
console.log("description: ", description);

console.log("tag \t \\tag")

let str = String("abc")
console.log(str, typeof(str))

let country = "ho chi minh" // => "Ho Chi Minh"
country = "Ho Chi Minh"
country[0] = "H"
console.log(country[0])
console.log(country)

console.log("######## Methods ########")
// string handler

const statement = "   Today    Today   is a    beautiful day!    "

console.log("country: ", country, "length: ", country.length)
console.log("charAt: ", country.charAt(0))
console.log("firstName: ", "John", "lastName: ", "Wick", "John".concat(" Wick"))
console.log("Statement: ", statement)
console.log("includes: beautiful", statement.includes("beautiful"))
console.log("indexOf: ", statement.indexOf("a"))
console.log("lastIndexOf: ", statement.lastIndexOf("a"))
console.log("replace: ", statement.replace("Today", "Tomorrow"))
console.log("replaceAll: ", statement.replaceAll("Today", "Tomorrow"))
console.log("slice: ", `'${statement.slice(0, 5)}'`)
console.log("substring: ", `'${statement.substring(0, 5)}'`)
console.log("substr: ", `'${statement.substr(2, 5)}'`)
console.log("split: ", statement.split(" "))
console.log("toUpperCase: ", statement.toUpperCase())
console.log("toLowerCase: ", statement.toLowerCase())
console.log("trim: ", `'${statement.trim()}'`)

let newStatement = statement.trim()

// performance low
while(newStatement.indexOf("  ") !== -1) {
    newStatement = newStatement.replaceAll("  ", " ")
}

console.log(newStatement)

// better performance
console.log(statement.split(" ").filter(item => item.length != 0).join(" "))