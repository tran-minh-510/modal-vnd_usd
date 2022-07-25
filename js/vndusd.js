var input = document.querySelector('.vnd-to-usd .vnd input')
var btnConvert = document.querySelector('.vnd-to-usd .button .convert')
var btnRemove = document.querySelector('.vnd-to-usd .button .remove')
var resultUsd = document.querySelector('.vnd-to-usd .usd .result-usd')

console.log(btnConvert)
console.log(btnRemove)

btnConvert.addEventListener('click', function () {
    var convertUsd = `${input.value} / 23255.8139535`;
    console.log(convertUsd);
    resultUsd.innerText = eval(convertUsd);
})

btnRemove.addEventListener('click', function () {
    input.value = '';
    resultUsd.innerText = '';
})

var input1 = document.querySelector('.usd-to-vnd .vnd input')
var btnConvert1 = document.querySelector('.usd-to-vnd .button .convert')
var btnRemove1 = document.querySelector('.usd-to-vnd .button .remove')
var resultUsd1 = document.querySelector('.usd-to-vnd .usd .result-usd')
console.log(btnConvert1)
console.log(btnRemove1)

btnConvert1.addEventListener('click', function () {
    var convertUsd = `${input1.value} * 23.437`;
    console.log(convertUsd);
    resultUsd1.innerText = eval(convertUsd);
})

btnRemove1.addEventListener('click', function () {
    input1.value = '';
    resultUsd1.innerText = '';
})