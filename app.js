// ARRAYS AND LOOP
// q:3
var counting = ""

// q:4
var userInput = +prompt("Enter a number to generate a table")

var tableRange = +prompt("enter table range ")

for (var i = 1 ; i <= tableRange; i++){
    document.write(userInput + "x" + i + "=" + userInput * i + "<br>" )

}
// q:5
var fruits = ["apple","banana","mango","orange","strawberry"]

document.write (fruits)

// q:6
// a
var series = "counting"
for(var i=1 ; i<=15 ;i++){series += i; 
    if(i < 15) {
        series += ",";
    }}
    document.write("<br>",series)

    // b
    var reverse = "Reverse counting"
    for (var i=10; i>= 1; i--) {reverse += i;
    if(i>1) {reverse += ",";} }
document.write ("<br>",reverse)

// c
var evenSeries = "even ";
for(var i=0 ;i<=20; i+=2)
{evenSeries += i;
if(i<20){evenSeries += ","}}
document.write("<br>",evenSeries)

// d
var odd = "odd";
for(var i = 1; i<=19;i +=2){
    odd +=i;
    if(i>19){odd += ", ";}
}
document.write("<br>", odd);

// e
var series = "series"
for(var i=2 ; i<=20; i+=2){
    series +=i + "k";
    if(i<20){series += ","}
}
document.write(series)

// q:7

var arr =["cake", "apple pie", "cookie", "chips", "patties"] 
var found = prompt["Enter an item to search"]

for (var i=0; i < arr.length; i++){if (found === arr[i]){
    console.log("cake is available")
}
}



