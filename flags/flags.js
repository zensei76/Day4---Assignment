//1. create a request variable
var request = new XMLHttpRequest();
// 2.create a new connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// 3. send request
request.send();
// 4. load response 
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);

    console.log("Countries with in Asia Region");
    var asia_reg_cont = data.filter((obj) => {return obj.region == 'Asia';});
    asia_reg_cont.forEach((obj) => {
         console.log(obj.name);
    })

    console.log("Countries with population less than 2 lakh")
    var pop_lessthan_2_cont = data.filter((obj) => {return obj.population < 200000;});
    pop_lessthan_2_cont.forEach((obj) => {
        console.log(obj.name);
    })

    console.log("Counries with name, capital and flag using forEach method");
    data.forEach(function(obj) {
        console.log('Country name: ', obj.name);
        console.log('Country Capital: ', obj.capital);
        console.log('Country Flag Path: ', obj.flag);
    })
    
    console.log("Total Population of all countries using reduce function");
    var total_pop = data.reduce(function(acc, obj) {
        return acc + obj.population;
    }, 0);
    console.log(total_pop);
    
    console.log("print the countries which uses USD as currency")
    var countries_usd = data.filter(obj => {
        return obj.currencies.some(obj1 => obj1.code == 'USD');
    })
    countries_usd.forEach((obj) => {console.log(obj.name)});
}