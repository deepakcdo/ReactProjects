

const TAX_RATE = 0.20;

var listPriceOfPhone = 99.99;

var myObject = {
    a: undefined
};


function calculateCostOfPhone() {
    var costWithTax = listPriceOfPhone + (listPriceOfPhone * TAX_RATE);
    return costWithTax.toFixed(2);
} bankBalance1.name = "deepak";
function bankBalance1(a, b) {
    console.log(a + b + name);
}



bankBalance1(4, 5);

function startJS() {
// question difference between new String("33") and String("33")
    console.log((new  String("33")).toString());

    console.log(typeof (String("33")));
    console.log(typeof (new String("33")));

//     var hell= "hello";
//     var r = ~hell.indexOf('l');
//     console.log(r);
//   var testa = {
//       b:42,
//       c: "42",
//       d: [1,2,3]
//   }
//   var result = JSON.stringify(testa, function(k,v){
//       return v;

//   },"-----------")
//   console.log("total result = " + result);
}

function startJS1() {
    // Qustions Check why this does not work Types and grammer chapter 3  - Native Prototypes
    console.log(Array.prototype);

    var ages = ages || Array.prototype;

    console.log(Array.prototype);
    console.log(ages);
    ages.push(2);
    console.log(Array.prototype);
    console.log(ages);
}

function buyPhones() {
    var bankBalance = Number(prompt("Please Enter your Bank Balance"));
    console.log(bankBalance)
    // console.log("before"+ i);
    // for (var i = 0; i< 3;i++){
    //     console.log("during"+i);
    // }
    // console.log("after"+i);

    // var foo = true;
    // if(foo){
    //     let newFoo = 44;
    // }
    // console.log(newFoo);

    var costOfAPhone = calculateCostOfPhone();
    console.log("1" + getName);
    console.log("2" + typeof getName);
    console.log("3" + getName(1));
    console.log("4" + getName(1, 3));
    console.log("Cost of phone is $" + costOfAPhone);
    getName.call(336);
    if (bankBalance >= costOfAPhone) {
        console.log("You can buy a phone");
        do {
            bankBalance = bankBalance - costOfAPhone;
            console.log("Bought a phone for $" + costOfAPhone + " your bank balance is $" + bankBalance);
        } while (bankBalance >= costOfAPhone);
        console.log("Bought all the phones you can!! ");
    } else {
        console.log("You cant buy a phone as you have $" + bankBalance + " in your account and the phone costs $" + costOfAPhone);
    }
    console.log("GoodBye");

}
function getName(age, date) {
    return " Age and Date PAra, Name" + age + " date  " + date;
}
function getName() {
    return " No PAram";
}
function getName(age) {
    return " Age Parsm" + age;
}


function getName1(age = 44) {
    return " Aget with default" + age;
}
var newTest = 1111;

(function print(newTest) {
    console.log("From Print " + newTest + "...");
})(print)