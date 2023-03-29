/*
function logger() {
    console.log('My name is Jonas');
}
// calling/running invoking kallas när du refererar och använder funktionen
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)
*/
+/*
// NOTE 1På det här sättet kan du göra men finns ett enklare sätt och se nedan nr. 2
// Här deklareras ett function med namnet calcAge1, birthYear är en parameter som dekleras i note 2 där parametern är 1991
// Det här sättet att använda funktion kallas för Function Declaration
function calcAge1(birthYear){
    const age = 2037- birthYear;
    return age;
}
// NOTE 2 Nr 2 det här är den förenklade sättet som används främst. Const age går bort istället skrivs värdet i return fältet skrivs 
// den fasta åldern: 2037 - birthYear som subtraheras. bIrthYear1 värdet angivs i Note 3 1991 som subtraheras med 2037. 
function calcAge2(birthYear1){
return 2037- birthYear1;
}
// NOTE 3Här refereras/ kommenteras age1, kommentaren är då 1991 som är age1 den är lika med calAge2(birthYear1)
const age1 = calcAge2(1991);
console.log(age1);

// NOTE 4 Här skapas en const calcAge3, functionen refereras då till calcAge3 Detta underlättar och kan användas då lättare. 
// Det här sättet med att använda function kallas för Function Expression
const calcAge3 = function (birthYear){
    return 2037 - birthYear;
}
// Som i NOTE 3, age 2 är en const som är lika med calcAge3 1990 är birthYear och ska subtraheras med return 2037
const age2 = calcAge3(1990);
console.log(age2)
*/
    /*
    LECTURE: Functions
    1. Write a function called 'describeCountry' which takes three parameters:
    'country', 'population' and 'capitalCity'. Based on this input, the
    function returns a string with this format: 'Finland has 6 million people and its
    capital city is Helsinki'
    2. Call this function 3 times, with input data for 3 different countries. Store the
    returned values in 3 different variables, and log them to the console
    */
    /*
    // Lecture Functions 
    function describeCountry (country, population, capitalCity) {
        const answer =`${country} has ${population} people and its
        capital city is ${capitalCity}`
        return answer
    } 
    const task = describeCountry('Finland', '6 million', 'Helsinki')
    console.log(task)
    
    const task1 = describeCountry('Sweden', '10 million', 'Stockholm')
    console.log(task1)
    
    const task2 = describeCountry('England', '60 million', 'London')
    console.log(task2)
    */
    // Lecture Function Declarations vs Expressions
    // 1. The world population is 7900 million people. Create a function declaration
    // called 'percentageOfWorld1' which receives a 'population' value, and
    // returns the percentage of the world population that the given population
    // represents. For example, China has 1441 million people, so it's about 18.2% of
    // the world population
    // 2. To calculate the percentage, divide the given 'population' value by 7900
    // and then multiply by 100
    // 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
    // store the results into variables, and log them to the console
    // 4. Create a function expression which does the exact same thing, called
    // 'percentageOfWorld2', and also call it with 3 country populations (can be
    // the same populations)
    /*
    // Function Declaration
    function percentageOfWorld1(populationForFunctionDeclaration){
        return populationForFunctionDeclaration / 7900 * 100;
    }
    const functionDeclaration1 = percentageOfWorld1(1441)
    console.log(functionDeclaration1)
    
    const functionDeclaration2 = percentageOfWorld1(140)
    console.log(functionDeclaration2)
    
    const functionDeclaration3 = percentageOfWorld1(2460)
    console.log(functionDeclaration3)
    
    // Function Expression
    const percentageOfWorld2 = function(populationForFunctionExpression){
        return populationForFunctionExpression / 7900 * 100;
    }
    const resultOfPercentForExpression1 = percentageOfWorld2(1441);
    console.log(resultOfPercentForExpression1);
    
    const resultOfPercentForExpression2 = percentageOfWorld2(140);
    console.log(resultOfPercentForExpression2);
    
    const resultOfPercentForExpression3 = percentageOfWorld2(2460);
    console.log(resultOfPercentForExpression3);
    */

    /*
    // Arrow Function 
    const calcAge3 = birthYear => 2023 - birthYear;
    const age3 = calcAge3(1991);
    console.log(age3)
    
    const yearsUntilRetirement = (birthYear, firtName) => {
        const age = 2023 -birthYear; 
        const retirement = 65 -age
        // return retirement
        return `${firtName} retires in ${retirement} years`
    }
    
    console.log(yearsUntilRetirement(1991, 'Jonas'));
    */
    /*
    //  LECTURE: Arrow Functions
    const percentageOfWorld3 = (population, countryPopulation) => {
        const percentageOfWorld4 =  countryPopulation / 7900 * 100;
    return `Chinas poplation is ${percentageOfWorld4 }`
    }
    console.log(percentageOfWorld3(7900, 1480))
    */
    /*
        // function calling other functions
        function cutFruitPieces(fruit) {
            return fruit * 4;
        }
    
    function fruitProcessor(apples, oranges) {
        const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);
    
        const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
        return juice;
    }
    console.log(fruitProcessor(2, 3));
    */
    /*
        function describeCountry(country, population) {
            console.log(describeCountry)
        }
    function percentageOfWorld1(population) {
        return (population / 7900) * 100;
    }
    */
    //     function percentageOfWorld1(populationForFunctionDeclaration) {
    //         return populationForFunctionDeclaration / 7900 * 100;
    //     }
    // const functionDeclaration1 = percentageOfWorld1(1441)
    // console.log(functionDeclaration1)

    // const functionDeclaration2 = percentageOfWorld1(140)
    // console.log(functionDeclaration2)

    // const functionDeclaration3 = percentageOfWorld1(2460)
    // console.log(functionDeclaration3)

    // // Function Expression
    // const percentageOfWorld2 = function (populationForFunctionExpression) {
    //     return populationForFunctionExpression / 7900 * 100;
    // }
    // const resultOfPercentForExpression1 = percentageOfWorld2(1441);
    // console.log(resultOfPercentForExpression1);

    // const resultOfPercentForExpression2 = percentageOfWorld2(140);
    // console.log(resultOfPercentForExpression2);

    // const resultOfPercentForExpression3 = percentageOfWorld2(2460);
    // console.log(resultOfPercentForExpression3);
    const a;
console.log(a)