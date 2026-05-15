let pozdrav = "Zdravím!";


function sayHello() {
    let pozdravFunkce = "Pozdrav z funkce" 
    console.log(pozdravFunkce)
}

if(true) {
    let zprava = "Toto je bloková zpráva"
    console.log(zprava)
}


sayHello();

function pozdrav2(name) {
    console.log("Zdravím" + name);
}

pozdrav2(" Zuzka")

function scitani(num1,num2) {
    console.log(num1 + num2)
}

scitani(4,6)

function odcitani(num1,num2) {
  console.log(num1 - num2);
}

odcitani(4,6)

function nasobeni(num1,num2) {
  console.log(num1 * num2);
}

nasobeni(4,6)

function deleni(num1,num2) {
  console.log(num1 / num2);
}

deleni(4,6)