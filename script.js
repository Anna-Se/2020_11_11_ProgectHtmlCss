// alert();
let ololo = `some text`;
let num = 5;
let bign = 354651265416584163n;
let bool = true;
let n = null; //пустота
let u = undefined; // неопредилено
let nun = NaN; // ошибка вычисления
let inf = Infinity; //бесконечность
//определение объекта
const car = {
    color: `red`,
    wheel: 4,
}; 
const arr = [7,25,58,6,41,5]; //присвоение элементов массива
arr[0] //вызов первого элемента массива

function sum (a,b) {
    let result = a+b;
    console.log(result);
    return result //показать результат
}
sum(4,5)
// стрелочные ф-ции
const newSum = (a,b) => a+b; //=> то же самое что и return