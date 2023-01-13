//-1
var num = 0;
while (num <= 20){
    console.log(num);
    ++num
    num = num + 1
}

//-2
var summa = 0;
do {
    var number = + prompt("Введите число: ")
    if(number >= 0){
        summa += number
    }
} while (number >= 0)
console.log("Сумма чисел -" + summa);







